import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @Min(1)
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @Min(0)
  limit?: number = 10;
}
