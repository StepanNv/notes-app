import { Controller, Get, NotFoundException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAccessAuthGuard } from '../auth/guards/jwt-access-auth.guard';
import type { TJwtPayload } from '../auth/types/jwt-payload';
import { GetAccessTokenPayload } from '../auth/decorators/get-at-payload.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetMeResDto } from './dtos/res/get-me-res.dto';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Получить информацию о себе' })
  @ApiResponse({ status: 200, type: GetMeResDto })
  @Get('/me')
  @UseGuards(JwtAccessAuthGuard)
  async getMe(
    @GetAccessTokenPayload() accessJwtPayload: TJwtPayload,
  ): Promise<GetMeResDto> {
    const user = await this.usersService.getOne({
      id: accessJwtPayload.userId,
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
