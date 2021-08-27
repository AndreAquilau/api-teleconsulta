import {
    Controller,
    Delete,
    Get,
    NotImplementedException,
    Param,
    Post,
    Put,
    Req,
    Res,
    HttpStatus,
    HttpCode,
    Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { ClienteService } from './cliente.service';

@Controller('clientes')
export class ClienteController {
    public constructor(private clienteService: ClienteService) {}

    @Get()
    public async findAll(@Req() request: Request, @Res() response: Response) {
        try {
            const clientes = await this.clienteService.findAll();

            return response.status(HttpStatus.OK).json(clientes);
        } catch (ex) {
            response.status(HttpStatus.EXPECTATION_FAILED);

            return response.json({
                statusCode: response.statusCode,
                message: ex.message,
            });
        } finally {
            Logger.log(
                `${request.url}`,
                `Request Cliente ${response.statusCode}`,
            );
        }
    }

    @Get(':id')
    public findById(@Param('id') id: string) {
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
