import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';

import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  findOne(filter: {
    where: {
      id?: string;
      username?: string;
      email?: string;
    };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    const user = new User();

    const isCreateUser = await this.findOne({
      where: { username: createUserDto.username },
    });

    const isCreateEmail = await this.findOne({
      where: { email: createUserDto.email },
    });

    if (isCreateUser || isCreateEmail) {
      return {
        warningMessage: `Пользователь с таким ${
          isCreateUser ? 'именем' : 'email'
        } уже зарегистрирован`,
      };
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 12);

    user.username = createUserDto.username;
    user.password = hashPassword;
    user.email = createUserDto.email;

    return user.save();
  }
}
