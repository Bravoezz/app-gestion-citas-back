import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async create(createUserDto: CreateUserDto): Promise<void> {
		await this.userRepository.create(createUserDto);
		return;
	}

	async findAll(): Promise<User[]> {
		return this.userRepository.findAll();
	}

	async findOne(id: number): Promise<User> {
		return this.userRepository.findOne(id);
	}

	async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
		return this.userRepository.update(id, updateUserDto);
	}

	async remove(id: number): Promise<void> {
		return this.userRepository.remove(id);
	}
}
