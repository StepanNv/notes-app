import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AddNoteDto } from './dtos/req/add-note.dto';
import { NotesService } from './notes.service';
import { DeleteNotesDto } from './dtos/req/delete-notes.dto';
import { UpdateNotesColorDto } from './dtos/req/update-notes-color.dto';
import { UpdateNoteContentDto } from './dtos/req/update-note-content.dto';
import { JwtAccessAuthGuard } from '../auth/guards/jwt-access-auth.guard';
import { GetAccessTokenPayload } from '../auth/decorators/get-at-payload.decorator';
import type { TJwtPayload } from '../auth/types/jwt-payload';
import { UpdateNotePositionDto } from './dtos/req/update-note-position.dto';
import { GetNotesDto } from './dtos/req/get-notes.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AddNoteResDto } from './dtos/res/add-note-res.dto';
import { UpdateNotesColorResDto } from './dtos/res/update-notes-color-res.dto';
import { UpdateNoteContentResDto } from './dtos/res/update-note-content-res.dto';
import { GetNotesResDto } from './dtos/res/get-notes-res.dto';
import { GetNoteResDto } from './dtos/res/get-note.res.dto';
import { UpdateStatusDto } from './dtos/req/update-status.dto';

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
  ): Promise<AddNoteResDto> {
    return this.notesService.addNote(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Архивировать заметку' })
  @Post('/update-status')
  @UseGuards(JwtAccessAuthGuard)
  updateStatus(
    @Body() dto: UpdateStatusDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ) {
    return this.notesService.updateStatus(dto, accessJwtPayload.userId);
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
  ): Promise<UpdateNotesColorResDto> {
    return this.notesService.updateNotesColor(dto, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить контент заметки (заголовок, текст)' })
  @Post('/update-content')
  @UseGuards(JwtAccessAuthGuard)
  updateNoteContent(
    @Body() dto: UpdateNoteContentDto,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<UpdateNoteContentResDto> {
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
  ): Promise<GetNotesResDto> {
    return this.notesService.getNotes(query, accessJwtPayload.userId);
  }

  @ApiOperation({ summary: 'Получить заметку' })
  @Get('/:id')
  @UseGuards(JwtAccessAuthGuard)
  getNote(
    @Param('id') id: string,
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<GetNoteResDto> {
    return this.notesService.getNote(id, accessJwtPayload.userId);
  }
}
