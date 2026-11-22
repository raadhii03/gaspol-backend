
import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  MinLength,
} from 'class-validator';

export class UpdateSpbuDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  nama?: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  alamat?: string;

  @IsOptional()
  @IsString()
  kota?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
