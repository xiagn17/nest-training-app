import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UserDTO } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: string){
    return this.userService.findById(id);
  }

  @Post()
  createUser(@Body() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDTO: Partial<UserDTO>) {
    return this.userService.update(id, userDTO);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(id);
  }

}
