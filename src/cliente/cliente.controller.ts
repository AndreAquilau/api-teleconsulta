import {
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
    Res,
    HttpStatus,
    Logger,
    Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ClienteService } from './cliente.service';
import { CreateClienteDTO } from './dto/createCliente.dto';
import { UpdateClienteDTO } from './dto/updateCliente.dto';

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
    public async findById(
        @Param('id') id: number,
        @Req() request: Request,
        @Res() response: Response,
    ) {
        try {
            const cliente = await this.clienteService.findById(id);

            return response.status(HttpStatus.OK).json(cliente);
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

    @Post()
    public async store(
        @Body() body: CreateClienteDTO,
        @Req() request: Request,
        @Res() response: Response,
    ) {
        try {
            const cliente = await this.clienteService.create(body);

            return response.status(HttpStatus.OK).json(cliente);
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

    @Put(':id')
    public async update(
        @Param('id') id: number,
        @Body() body: UpdateClienteDTO,
        @Req()
        request: Request,
        @Res() response: Response,
    ) {
        try {
            const cliente = await this.clienteService.update(id, body);

            return response.status(HttpStatus.OK).json(cliente);
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

    @Delete(':id')
    public async delete(
        @Param('id') id: number,
        @Req() request: Request,
        @Res() response: Response,
    ) {
        try {
            await this.clienteService.delete(id);

            return response.status(HttpStatus.OK).end();
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
}
