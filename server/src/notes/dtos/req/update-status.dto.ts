import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsEnum,
  IsString,
} from 'class-validator';
import { status } from '../../../../prisma/generated/enums';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatusDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  readonly noteIds: string[];

  @ApiProperty({ enum: status })
  @IsEnum(status)
  readonly currentStatus: status;

  @ApiProperty({ enum: status })
  @IsEnum(status)
  readonly selectedStatus: status;
}
