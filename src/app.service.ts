import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getStatus(): string {
        return JSON.stringify({
            message: 'API Consulta Online',
            status: 'OK',
            statusCode: 200,
        });
    }
}
