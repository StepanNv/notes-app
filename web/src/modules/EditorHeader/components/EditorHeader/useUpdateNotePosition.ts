import { useEffect, useRef } from 'react';
import { useQueryClient, type InfiniteData } from '@tanstack/react-query';
import type { GetNotesResDto } from '../../../../api/generated/data-contracts';
import { updateNotePosition } from '../../api/update-note-positon';
import { useErrorsStore } from '../../../ErrorAlertsBox';

const NOTES_QUERY_KEY = ['notes'];
const SYNC_DELAY_MS = 600;

type TMoveDirection = 'up' | 'down';

// Меняет местами заметку с соседней в кэше списка и возвращает новый кэш
const swapAdjacentInCache = (
  old: InfiniteData<GetNotesResDto> | undefined,
  noteId: string,
  direction: TMoveDirection,
): InfiniteData<GetNotesResDto> | undefined => {
  if (!old) return old;

  const flat = old.pages.flatMap((page) => page.notes);
  const i = flat.findIndex((note) => note.id === noteId);
  const j = direction === 'up' ? i - 1 : i + 1;

  if (i === -1 || j < 0 || j >= flat.length) return old;

  const movedNote = { ...flat[i], positionNumber: flat[j].positionNumber };
  const neighborNote = { ...flat[j], positionNumber: flat[i].positionNumber };
  flat[i] = neighborNote;
  flat[j] = movedNote;

  let cursor = 0;
  const pages = old.pages.map((page) => {
    const slice = flat.slice(cursor, cursor + page.notes.length);
    cursor += page.notes.length;
    return {
      ...page,
      notes: slice,
      next_last_id:
        page.next_last_id === null
          ? null
          : (slice[slice.length - 1]?.id ?? null),
    };
  });

  return { ...old, pages };
};

// Оптимистично двигает заметку в кэше сразу, а запрос на сервер шлёт с debounce
export const useUpdateNotePosition = () => {
  const queryClient = useQueryClient();
  const addError = useErrorsStore((state) => state.addError);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snapshotRef = useRef<InfiniteData<GetNotesResDto> | undefined>(
    undefined,
  );
  const noteIdRef = useRef<string | null>(null);

  // Отправляет на сервер финальную позицию заметки и завершает текущий батч
  const flush = async () => {
    const noteId = noteIdRef.current;
    const snapshot = snapshotRef.current;
    noteIdRef.current = null;
    snapshotRef.current = undefined;
    timeoutRef.current = null;

    if (!noteId) return;

    const note = queryClient
      .getQueryData<InfiniteData<GetNotesResDto>>(NOTES_QUERY_KEY)
      ?.pages.flatMap((page) => page.notes)
      .find((item) => item.id === noteId);

    if (!note) return;

    try {
      await updateNotePosition(noteId, note.positionNumber);
    } catch {
      if (snapshot) queryClient.setQueryData(NOTES_QUERY_KEY, snapshot);
      addError('Something went wrong. Please try again later.');
    } finally {
      queryClient.invalidateQueries({ queryKey: NOTES_QUERY_KEY });
    }
  };

  // Мгновенно меняет заметку местами с соседней и перезапускает таймер запроса
  const move = (noteId: string, direction: TMoveDirection) => {
    if (noteIdRef.current && noteIdRef.current !== noteId) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      flush();
    }

    queryClient.cancelQueries({ queryKey: NOTES_QUERY_KEY });

    if (!snapshotRef.current) {
      snapshotRef.current =
        queryClient.getQueryData<InfiniteData<GetNotesResDto>>(NOTES_QUERY_KEY);
    }

    queryClient.setQueryData<InfiniteData<GetNotesResDto>>(
      NOTES_QUERY_KEY,
      (old) => swapAdjacentInCache(old, noteId, direction),
    );

    noteIdRef.current = noteId;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(flush, SYNC_DELAY_MS);
  };

  // Досылает отложенный запрос при размонтировании, чтобы не потерять перемещение
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        flush();
      }
    };
  }, []);

  return { move };
};
