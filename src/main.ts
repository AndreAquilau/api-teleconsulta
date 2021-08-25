import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        const HOST = process.env.HOST || 'localhost';
        const PORT = process.env.PORT || 3000;

        await app.listen(PORT).then(() => {
            console.log(`http://${HOST}:${PORT}`);
        });
    } catch (err) {
        console.error(err.message);
    } finally {
        console.log('Server is running in ' + process.env.NODE_ENV + ' mode');
    }
}
bootstrap();
