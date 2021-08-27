import {
    Controller,
    Delete,
    Get,
    NotImplementedException,
    Param,
    Post,
    Put,
    Request,
    Response,
    Req,
    Res,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Cliente } from 'src/entity/cliente.entity';
import { ClienteService } from './cliente.service';

@Controller('clientes')
export class ClienteController {
    public constructor(private clienteService: ClienteService) {}

    @Get()
    public async findAll() {
        const cliente = await this.clienteService.findAll();
        console.log(cliente);
        return '';
    }
    @Get(':id')
    public findById(@Param('id') id: string): Observable<any> {
        throw new NotImplementedException();
    }

    @Post()
    public store(
        @Req() request: Request,
        @Res() response: Response,
    ): Observable<any> {
        throw new NotImplementedException();
    }

    @Put()
    public update(
        @Req() request: Request,
        @Res() response: Response,
    ): Observable<any> {
        throw new NotImplementedException();
    }

    @Delete()
    public delete(
        @Req() request: Request,
        @Res() response: Response,
    ): Observable<any> {
        throw new NotImplementedException();
    }
}
