import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Injectable()
export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
