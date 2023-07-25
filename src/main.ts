import { NestFactory } from '@nestjs/core'; //the core NestFactory class exposes static methods that allow creating an app instance
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //the create method returns an application object which fulfills the INestApplication interface
  await app.listen(3000);
}
bootstrap();
