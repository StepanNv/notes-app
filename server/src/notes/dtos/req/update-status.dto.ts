import { ArrayNotEmpty, ArrayUnique, IsArray, IsString } from 'class-validator';
import { status } from '../../../../prisma/generated/enums';

export class UpdateStatusDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  readonly noteIds: string[];

  readonly currentStatus: status;

  readonly selectedStatus: status;
}
