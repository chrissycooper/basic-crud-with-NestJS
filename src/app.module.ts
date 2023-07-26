import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { NestDocsController } from './nest-docs/nest-docs.controller';

//the root module for the application
@Module({
  imports: [],
  controllers: [AppController, CatsController, NestDocsController],
  providers: [AppService],
})
export class AppModule {}
