import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
	constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

	async create(createUserDto: CreateUserDto): Promise<void> {
		await this.userRepo.insert(createUserDto)
        return
    }

	async findAll(): Promise<User[]> {
        return this.userRepo.find({order: {id: 'desc'}})
    }

	async findOne(id: number): Promise<User> {
        return this.userRepo.findOneBy({id})
    }

	async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
        await this.userRepo.update({id}, updateUserDto)
        return
    }

	async remove(id: number): Promise<void> {
        await this.userRepo.delete({id})
        return
    }
}
