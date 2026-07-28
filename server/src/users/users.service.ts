import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserUpdateInput, UserWhereInput } from '../../prisma/generated/models';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  public createOne(email: string, username: string, hashedPassword: string) {
    return this.prismaService.user.create({
      data: { email, username, hashedPassword },
    });
  }

  // Новый метод: ищет пользователя, но не бросает ошибку, если его нет
  public async findOne(args: {
    id?: string;
    email?: string;
    username?: string;
  }) {
    const orConditions: UserWhereInput[] = [];

    if (args.id) orConditions.push({ id: args.id });
    if (args.email) orConditions.push({ email: args.email });
    if (args.username) orConditions.push({ username: args.username });

    if (orConditions.length === 0) {
      throw new BadRequestException('No arguments provided');
    }

    return this.prismaService.user.findFirst({
      where: { OR: orConditions },
    });
  }

  public async getOne(args: {
    id?: string;
    email?: string;
    username?: string;
  }) {
    const user = await this.findOne(args);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  public async updateOne(id: string, data: UserUpdateInput) {
    const existingUser = await this.getOne({ id }); // Здесь getOne уместен
    return this.prismaService.user.update({
      where: { id: existingUser.id },
      data,
    });
  }
}
