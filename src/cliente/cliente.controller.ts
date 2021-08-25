import { Controller, Get } from '@nestjs/common';

@Controller('clientes')
export class ClienteController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}
