import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAccessAuthGuard } from '../auth/guards/jwt-access-auth.guard';
import type { TJwtPayload } from '../auth/types/jwt-payload';
import { GetAccessTokenPayload } from '../auth/decorators/get-at-payload.decorator';
import type { User } from '../../prisma/generated/client';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Получить информацию о себе' })
  @Get('/me')
  @UseGuards(JwtAccessAuthGuard)
  getMe(
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<User | null> {
    return this.usersService.getOne({ id: accessJwtPayload.userId });
  }
}
