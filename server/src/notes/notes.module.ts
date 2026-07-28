import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [AuthModule],
})
export class NotesModule {}
