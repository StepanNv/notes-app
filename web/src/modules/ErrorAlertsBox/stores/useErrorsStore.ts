import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TError = {
  id: string;
  title: string;
  message: string;
  isClosing?: boolean;
};

type TUseErrorsStore = {
  errors: TError[];
  pendingErrors: TError[];
  addError: (message: string) => void;
  removeError: (errorId: string) => void;
};

const MAX_VISIBLE_ERRORS = 5;

const createError = (message: string): TError => ({
  id: uuidv4(),
  title: 'Error',
  message,
});

const hasClosingError = (errors: TError[]) =>
  errors.some((error) => error.isClosing);

const closeOldestError = (errors: TError[]) => {
  const oldestError = errors.find((error) => !error.isClosing);

  if (!oldestError) {
    return errors;
  }

  return errors.map((error) =>
    error.id === oldestError.id ? { ...error, isClosing: true } : error,
  );
};

export const useErrorsStore = create<TUseErrorsStore>()((set) => ({
  errors: [],
  pendingErrors: [],
  addError: (message: string) => {
    set((state) => {
      const error = createError(message);

      if (state.errors.length < MAX_VISIBLE_ERRORS) {
        return { errors: [...state.errors, error] };
      }

      return {
        errors: hasClosingError(state.errors)
          ? state.errors
          : closeOldestError(state.errors),
        pendingErrors: [...state.pendingErrors, error],
      };
    });
  },
  removeError: (errorId: string) => {
    set((state) => {
      const errors = state.errors.filter((error) => error.id !== errorId);
      const [nextError, ...pendingErrors] = state.pendingErrors;

      if (!nextError) {
        return { errors };
      }

      const visibleErrors = [...errors, nextError];
      const shouldCloseOldestError =
        pendingErrors.length > 0 &&
        visibleErrors.length >= MAX_VISIBLE_ERRORS &&
        !hasClosingError(visibleErrors);

      return {
        errors: shouldCloseOldestError
          ? closeOldestError(visibleErrors)
          : visibleErrors,
        pendingErrors,
      };
    });
  },
}));
