import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsStrongPassword,
  IsStrongPasswordOptions,
} from 'class-validator';

const passwordDecoratorOptions: IsStrongPasswordOptions = {
  minLength: 6,
  minNumbers: 0,
  minSymbols: 0,
  minUppercase: 1,
};

export class CredentialsDto {
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsStrongPassword(passwordDecoratorOptions)
  password: string;
}
