import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TTokensPayload } from '../types/jwt-payload';

@Injectable()
export class TokensService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateTokens(payload: TTokensPayload) {
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
      expiresIn: this.configService.get<number>('ACCESS_TOKEN_EXPIRES'),
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.get<number>('REFRESH_TOKEN_EXPIRES'),
    });

    return { accessToken, refreshToken };
  }

  async verifyAccessToken(token: string) {
    return await this.jwtService.verifyAsync<TTokensPayload>(token, {
      secret: this.configService.get<string>('ACCESS_TOKEN_SECRET'),
    });
  }

  async verifyRefreshToken(token: string) {
    return await this.jwtService.verifyAsync<TTokensPayload>(token, {
      secret: this.configService.get<string>('REFRESH_TOKEN_SECRET'),
    });
  }
}
