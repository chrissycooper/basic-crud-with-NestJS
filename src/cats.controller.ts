import { Controller, Get, Req, Post, HttpCode } from "@nestjs/common";
import { Request } from "express";

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'this action creates a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

}
