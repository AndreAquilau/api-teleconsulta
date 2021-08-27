import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        app.setGlobalPrefix('api/v1');

        const PORT = process.env.PORT || 3000;

        await app.listen(PORT);

        app.getUrl().then((url) =>
            Logger.log(`App is running at ${url}`, 'BaseUrl'),
        );
    } catch (err) {
        Logger.error(err.message, 'ExceptionStartingServer');
    } finally {
        Logger.log(
            'Server is running in ' + process.env.NODE_ENV + ' mode',
            'StartingServer',
        );
    }
}
bootstrap();
