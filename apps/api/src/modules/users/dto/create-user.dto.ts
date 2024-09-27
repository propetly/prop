import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  middleName?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(30)
  password: string;
}
