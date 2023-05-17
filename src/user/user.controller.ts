import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dtos/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUser: createUserDTO) {
    return this.userService.createUser(createUser);
  }
}
