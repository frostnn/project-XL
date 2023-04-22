import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Artem' })
  username: string;

  @ApiProperty({ example: '1234567890' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: '123123123124124',
        username: 'Artem',
        password: '1234567890',
      },
    },
  })
  user: {
    userId: string;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  msg: string;
}

export class LoginCheckUserRequest {
  @ApiProperty({ example: 'Artem' })
  username: string;

  @ApiProperty({ example: '1234567890' })
  password: string;

  @ApiProperty({ example: 'Artem@mail.com' })
  email: string;
}

export class RegistrationUserResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Artem' })
  username: string;

  @ApiProperty({
    example: '$2b$12$1nyGzQEsmTiWQiPHT5ADkuzyWJ/FkYf7BVG3MRv7n0ItYiz0.zfri',
  })
  password: string;

  @ApiProperty({ example: 'Artem@mail.com' })
  email: string;

  @ApiProperty({ example: '2023-04-22T11:03:18.887Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-04-22T11:03:18.887Z' })
  createdAt: string;
}
