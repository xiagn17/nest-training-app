import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UserDTO } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {}

  findAll() {
    return this.userModel.find();
  }

  async findById(id: string) {
    try {
      const user = await this.userModel.findById(id);
      if (!user) return { notFound: true };
      return user;
    } catch (e) {
      return { exception: 'not valid id' }
    }
  }

  create(userDTO: UserDTO) {
    return this.userModel.create(userDTO);
  }

  update(id: string, userDTO: Partial<UserDTO>) {
    return this.userModel.updateOne({ _id: id }, userDTO);
  }

  delete(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
