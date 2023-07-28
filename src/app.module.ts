import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { NestDocsController } from './nest-docs/nest-docs.controller';
import { AdminControllerController } from './admin-controller/admin.controller';
import { AccountController } from './account/account.controller';

//the root module for the application
@Module({
  imports: [],
  controllers: [AppController, CatsController, NestDocsController, AdminControllerController, AccountController],
  providers: [AppService],
})
export class AppModule {}
