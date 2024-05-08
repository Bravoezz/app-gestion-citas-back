import { ApiProperty } from "@nestjs/swagger";

export class ResponseEntity<T = any> {
    @ApiProperty()
	public res: boolean;
    @ApiProperty()
	public message: string;
    @ApiProperty()
	public data: T;
	constructor(res: boolean, message: string, data: T) {
		this.res = res;
		this.message = message;
		this.data = data;
	}
}
