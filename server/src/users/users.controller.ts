import { Controller, Get, NotFoundException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import type { TTokensPayload } from '../auth/types/jwt-payload';
import { GetAccessTokenPayload } from '../auth/decorators/get-at-payload.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetMeResDto } from './dtos/res/get-me-res.dto';
import { AccessTokenGuard } from '../auth/guards/access-token.guard';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Получить информацию о себе' })
  @ApiResponse({ status: 200, type: GetMeResDto })
  @Get('/me')
  @UseGuards(AccessTokenGuard)
  async getMe(
    @GetAccessTokenPayload() accessTokenPayload: TTokensPayload,
  ): Promise<GetMeResDto> {
    const user = await this.usersService.getOne({
      id: accessTokenPayload.userId,
    });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
