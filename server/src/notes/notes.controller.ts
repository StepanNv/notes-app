import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AddNoteDto } from './dtos/req/add-note.dto';
import { NotesService } from './notes.service';
import { ArchiveNotesDto } from './dtos/req/archive-notes.dto';
import { UnarchiveNotesDto } from './dtos/req/unarchive-notes.dto';
import { TrashNotesDto } from './dtos/req/trash-notes.dto';
import { RestoreTrashedNotesDto } from './dtos/req/restore-trashed-notes.dto';
import { DeleteNotesDto } from './dtos/req/delete-notes.dto';
import { UpdateNotesColorDto } from './dtos/req/update-notes-color.dto';
import { UpdateNoteContentDto } from './dtos/req/update-note-content.dto';
import { JwtAccessAuthGuard } from '../auth/guards/jwt-access-auth.guard';
import { GetAccessTokenPayload } from '../auth/decorators/get-at-payload.decorator';
import type { TJwtPayload } from '../auth/types/jwt-payload';
import { UpdateNotePositionDto } from './dtos/req/update-note-position.dto';
import { GetNotesDto } from './dtos/req/get-notes.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AddNoteResponseDto } from './dtos/res/add-note.dto';
import { UpdateNotesColorResponseDto } from './dtos/res/update-notes-color.dto';
import { UpdateNoteContentResponseDto } from './dtos/res/update-note-content.dto';
import { GetNotesResponseDto } from './dtos/res/get-notes.dto';

@ApiBearerAuth()
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @ApiOperation({ summary: 'Добавить заметку' })
  @Post('/add')
  @UseGuards(JwtAccessAuthGuard)
  addNote(
    @Body() dto: AddNoteDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<AddNoteResponseDto> {
    return this.notesService.addNote(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Архивировать заметку' })
  @Post('/archive')
  @UseGuards(JwtAccessAuthGuard)
  archiveNotes(
    @Body() dto: ArchiveNotesDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.archiveNotes(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Разрхивировать заметку' })
  @Post('/unarchive')
  @UseGuards(JwtAccessAuthGuard)
  unarchiveNotes(
    @Body() dto: UnarchiveNotesDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.unarchiveNotes(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Поместить заметку корзину' })
  @Post('/trash')
  @UseGuards(JwtAccessAuthGuard)
  trashNotes(
    @Body() dto: TrashNotesDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.trashNotes(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Убрать заметку из корзины' })
  @Post('/restore-trashed')
  @UseGuards(JwtAccessAuthGuard)
  restoreTrashedNotes(
    @Body() dto: RestoreTrashedNotesDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.restoreTrashedNotes(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Удалить замтеку' })
  @Delete('/delete')
  @UseGuards(JwtAccessAuthGuard)
  deleteNotes(
    @Body() dto: DeleteNotesDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.deleteNotes(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить цвет заметки' })
  @Post('/update-color')
  @UseGuards(JwtAccessAuthGuard)
  updateNotesColor(
    @Body() dto: UpdateNotesColorDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<UpdateNotesColorResponseDto> {
    return this.notesService.updateNotesColor(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить контент заметки (заголовок, текст)' })
  @Post('/update-content')
  @UseGuards(JwtAccessAuthGuard)
  updateNoteContent(
    @Body() dto: UpdateNoteContentDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<UpdateNoteContentResponseDto> {
    return this.notesService.updateNoteContent(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Изменить позицию заметки' })
  @Post('/update-position')
  @UseGuards(JwtAccessAuthGuard)
  updateNotePosition(
    @Body() dto: UpdateNotePositionDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.updateNotePosition(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Получить заметки' })
  @Get('/')
  @UseGuards(JwtAccessAuthGuard)
  getNotes(
    @Query() query: GetNotesDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<GetNotesResponseDto> {
    return this.notesService.getNotes(query, accessJwtPayload.userId);
  }
}
