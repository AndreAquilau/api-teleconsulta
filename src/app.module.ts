import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: process.env.NODE_ENV
                ? '.production.env'
                : '.development.env',
        }),
        DatabaseModule,
        ClienteModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
