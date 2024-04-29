export class ResponseEntity<T = any> {
    constructor(
        readonly res: boolean,
        readonly message: string,
        readonly data: T
    ) {}
}