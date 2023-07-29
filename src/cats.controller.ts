import { Controller, Get, Req, Post, HttpCode, Header, Param } from "@nestjs/common";
import { Request } from "express";

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'this action creates a new cat';
  }

  @Get()
  async findAll(@Req() request: Request): Promise<any[]> {
    return ['This action returns all cats'];
  }

  @Get(':id')
  findOne(@Param() params:any): string {
    return `this action returns cat #${params.id}`
  }

}
