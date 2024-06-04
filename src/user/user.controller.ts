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
import { CreateUserDto, LoginUserDto, ResponseLoginDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { AllMedicsDto } from './dto/response-all-medics.dto';
import { AllPatientsDto } from './dto/response-all-patients.dto';

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

	@Post('login')
	@ApiResponse({
		status: 201, description: 'Autenticar usuario, enviar el type Medico | Empleado | Paciente | etc',
		type: ResponseLoginDto
	})
	async login(@Body() loginDto: LoginUserDto): Promise<ResponseLoginDto> {
		const foundUser = await this.userService.login(loginDto)
		if (!foundUser) {
			return new ResponseLoginDto(false,'Usuario invalido', foundUser)
		}
		return new ResponseLoginDto(true,'Usuario autenticado correctamente', foundUser)
	}

	@Get("medicos")
	@ApiResponse({ status: 200, description: 'Lista de medicos con sus horarios', type: [AllMedicsDto] })
	async findAllMedics() {
		return await this.userService.findMedics();
	}

	@Get("medico/:id")
	@ApiResponse({ status: 200, description: 'Lista de medicos con sus horarios', type: AllMedicsDto })
	async findOneMedic(@Param('id') id: string) {
		return await this.userService.findOneMedic(Number(id));
	}

	@Get("pacientes")
	@ApiResponse({ status: 200, description: 'Lista de pacientes con sus recetas', type: [AllPatientsDto] })
	async findAllPatients() {
		return await this.userService.findPatients();
	}

	@Get("paciente/:id")
	@ApiResponse({ status: 200, description: 'Lista de pacientes con sus recetas', type: AllPatientsDto })
	async findOnePatient(@Param('id') id: string) {
		return await this.userService.findOnePatient(Number(id));
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
