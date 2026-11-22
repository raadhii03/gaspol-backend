
import {
  IsString,
  IsNumber,
  IsBoolean,
  MinLength,
} from 'class-validator';

export class CreateSpbuDto {
  @IsString()
  @MinLength(3)
  nama: string;

  @IsString()
  @MinLength(5)
  alamat: string;

  @IsString()
  kota: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsBoolean()
  status: boolean;
}
