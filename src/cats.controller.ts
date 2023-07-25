import { Controller, Get, Req, Post } from "@nestjs/common";

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'this action creates a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}