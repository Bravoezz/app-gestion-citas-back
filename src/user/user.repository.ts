import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(User) private readonly userRepo: Repository<User>,
	) {	}

	async login(loginDto: LoginUserDto): Promise<User | null> {
		return  this.userRepo.findOne({ where: loginDto});
	}

	async create(createUserDto: CreateUserDto): Promise<void> {
		if (createUserDto.edad) {
			createUserDto.edad = createUserDto.edad.toString();
		}
		await this.userRepo.insert(createUserDto);
		return;
	}

	async findAll(): Promise<User[]> {
		return this.userRepo.find({ order: { id: 'asc' } });
	}

	async findMedics(): Promise<User[]> {
		return this.userRepo.find({ where: { type: 'Medico' }, order: { id: 'asc' }, relations: { horarios: true } });
	}

	async findOneMedic(id: number): Promise<User> {
		return this.userRepo.findOne({ where: { id, type: 'Medico' }, relations: { horarios: true } });
	}

	async findPatients(): Promise<User[]> {
		return this.userRepo.find({ where: { type: 'Paciente' }, order: { id: 'asc' }, relations: { recetas: true } });
	}

	async findOnePatient(id: number): Promise<User> {
		return this.userRepo.findOne({ where: { id, type: 'Paciente' }, relations: { recetas: true } });
	}

	async findOne(id: number): Promise<User> {
		return this.userRepo.findOneBy({ id });
	}

	async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
		if (updateUserDto.edad) {
			updateUserDto.edad = updateUserDto.edad.toString();
		}
		await this.userRepo.update({ id }, updateUserDto);
		return;
	}

	async remove(id: number): Promise<void> {
		await this.userRepo.delete({ id });
		return;
	}
}
