import { Controller, Get, Req, Post, HttpCode, Header, Param, Body } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "./create-cat.dto";

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  //we're using a JS class to type this DTO (Data Transfer Object) instead of a TS interface because the js class will be available throughout the life of the program, and interfaces are removed during the transpilation so Nest cannot refer to them at run time. There are some possiblities Pipes can give us if they have access to the metatype of the variable at runtime.
  async create(@Body() createCatdto: CreateCatDto) {
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
