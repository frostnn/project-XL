import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Artem' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: '123456789' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'Artem@mail.com' })
  @IsNotEmpty()
  readonly email: string;
}
