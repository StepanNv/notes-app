import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  constructor(private readonly tokensService: TokensService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    try {
      const refreshToken = req.cookies?.refreshToken;

      if (!refreshToken) {
        throw new UnauthorizedException({ message: 'User unauthorized' });
      }

      const verifiedRefreshTokenPayload =
        await this.tokensService.verifyRefreshToken(refreshToken);

      req.refreshTokenPayload = verifiedRefreshTokenPayload;

      return true;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException({ message: 'User unauthorized' });
    }
  }
}
