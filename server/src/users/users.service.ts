import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../../prisma/generated/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  public createOne(email: string, username: string, hashedPassword: string) {
    return this.prismaService.user.create({
      data: {
        email,
        username,
        hashedPassword,
      },
    });
  }

  public async getOne(args: { id?: string; email?: string; username?: string }) {
    const orConditions: Prisma.UserWhereInput[] = [];

    if (args.id) orConditions.push({ id: args.id });
    if (args.email) orConditions.push({ email: args.email });
    if (args.username) orConditions.push({ username: args.username });

    if (orConditions.length === 0) {
      return null;
    }

    const user = await this.prismaService.user.findFirst({
      where: {
        OR: orConditions,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}
