import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersController } from './users.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
