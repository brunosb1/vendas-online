import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import { createUserDTO } from './dtos/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDTO: createUserDTO): Promise<UserEntity> {
    return {
      ...createUserDTO,
      typeUser: 1,
      password: undefined,
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
