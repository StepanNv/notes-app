import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AddNoteDto } from './dtos/req/add-note.dto';
import { NotesService } from './notes.service';
import { DeleteNotesDto } from './dtos/req/delete-notes.dto';
import { UpdateNotesColorDto } from './dtos/req/update-notes-color.dto';
import { UpdateNoteContentDto } from './dtos/req/update-note-content.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';
import { GetAccessTokenPayload } from '../auth/decorators/get-at-payload.decorator';
import type { TTokensPayload } from '../auth/types/jwt-payload';
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
  @Post('/')
  @UseGuards(AccessTokenGuard)
  public add(
    @Body() dto: AddNoteDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ): Promise<AddNoteResDto> {
    return this.notesService.addNote(dto, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить статус заметок' })
  @Patch('/status')
  @UseGuards(AccessTokenGuard)
  public updateStatus(
    @Body() dto: UpdateStatusDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ) {
    return this.notesService.updateStatus(dto, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Удалить заметки' })
  @Delete('/')
  @UseGuards(AccessTokenGuard)
  public deleteNotes(
    @Body() dto: DeleteNotesDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ) {
    return this.notesService.deleteNotes(dto, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить цвет заметок' })
  @Patch('/color')
  @UseGuards(AccessTokenGuard)
  public updateColor(
    @Body() dto: UpdateNotesColorDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ): Promise<UpdateNotesColorResDto> {
    return this.notesService.updateNotesColor(dto, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить контент заметки (заголовок, текст)' })
  @Patch('/content')
  @UseGuards(AccessTokenGuard)
  public updateContent(
    @Body() dto: UpdateNoteContentDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ): Promise<UpdateNoteContentResDto> {
    return this.notesService.updateNoteContent(dto, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Обновить позицию заметки' })
  @Patch('/position')
  @UseGuards(AccessTokenGuard)
  public updatePosition(
    @Body() dto: UpdateNotePositionDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ) {
    return this.notesService.updateNotePosition(dto, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Получить заметки' })
  @Get('/')
  @UseGuards(AccessTokenGuard)
  public getMany(
    @Query() query: GetNotesDto,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ): Promise<GetNotesResDto> {
    return this.notesService.getNotes(query, accessTokenPayload.userId);
  }

  @ApiOperation({ summary: 'Получить заметку' })
  @Get('/:id')
  @UseGuards(AccessTokenGuard)
  public getOne(
    @Param('id') id: string,
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ): Promise<GetNoteResDto> {
    return this.notesService.getNote(id, accessTokenPayload.userId);
  }
}
