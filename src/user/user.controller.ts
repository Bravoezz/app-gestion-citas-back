import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		return await this.userService.create(createUserDto);
	}

	@Get()
	@ApiResponse({ status: 200, description: 'Lista de usuarios', type: [User] })
	async findAll() {
		return await this.userService.findAll();
	}

	@Get(':id')
	@ApiResponse({ status: 200, description: 'Buscar usuario por id', type: User })
	async findOne(@Param('id') id: string) {
		return await this.userService.findOne(+id);
	}

	@Patch(':id')
	async update( @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return await this.userService.update(+id, updateUserDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: string) {
		return await this.userService.remove(+id);
	}
}
