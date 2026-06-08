import {
  IsEnum,
  IsOptional,
  IsString,
  IsInt,
  Min,
  Max,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { status } from '../../../../prisma/generated/enums';
import { ApiProperty } from '@nestjs/swagger';

export enum SORT_METHODS {
  CUSTOM = 'custom',
  CREATED_AT = 'created_at',
  UPDATED_AT = 'updated_at',
}
export class GetNotesDto {
  @ApiProperty({ enum: status })
  @IsEnum(status)
  readonly status: status;

  @IsOptional()
  @IsEnum(SORT_METHODS)
  readonly sort?: SORT_METHODS = SORT_METHODS.CUSTOM;

  @IsOptional()
  @IsString()
  readonly search?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  readonly limit?: number = 20;

  @IsOptional()
  @IsUUID()
  readonly last_id?: string;
}
