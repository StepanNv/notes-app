import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { GetRefreshTokenPayload } from './decorators/get-rt-payload.decorator';
import { SignUpDto } from './dtos/req/sign-up.dto';
import { SignInDto } from './dtos/req/sign-in.dto';
import { AuthResDto } from './dtos/res/auth-res.dto';
import type { TTokensPayload } from './types/jwt-payload';
import { TokensService } from './tokens/tokens.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokensService,
    private readonly configService: ConfigService,
  ) {}

  @ApiOperation({ summary: 'Регистрация в системе' })
  @Post('/sign-up')
  async signUp(
    @Body() dto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResDto> {
    const userData = await this.authService.signUp(dto);
    return this.giveTokens({ userId: userData.id }, res);
  }

  @ApiOperation({ summary: 'Вход в систему' })
  @Post('/sign-in')
  async signIn(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResDto> {
    const userData = await this.authService.signIn(dto);
    return this.giveTokens({ userId: userData.id }, res);
  }

  @ApiOperation({ summary: 'Выход из системы' })
  @Post('sign-out')
  signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
  }

  @ApiOperation({ summary: 'Обновление токенов авторизации' })
  @Post('/refresh')
  @UseGuards(RefreshTokenGuard)
  async refresh(
    @GetRefreshTokenPayload() refreshTokenPayload: TTokensPayload,
    @Res({ passthrough: true }) res: Response,
  ): Promise<AuthResDto> {
    const userData = await this.authService.refresh(refreshTokenPayload);
    return this.giveTokens({ userId: userData.id }, res);
  }

  private async giveTokens(
    tokenPaylaod: TTokensPayload,
    res: Response,
  ): Promise<AuthResDto> {
    const tokens = await this.tokenService.generateTokens(tokenPaylaod);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      // secure: true,
      maxAge: this.configService.get<number>('REFRESH_TOKEN_EXPIRES')! * 1000,
    });

    return { accessToken: tokens.accessToken };
  }
}
