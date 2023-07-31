import { Controller, Get, Req, Post, Query, Param, Body, Put } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "./dto/create-cat.dto";
import { ListAllEntities } from "./dto/list-all-entities.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";

@Controller('cats')
export class CatsController {
  @Post()
  //we're using a JS class to type this DTO (Data Transfer Object) instead of a TS interface because the js class will be available throughout the life of the program, and interfaces are removed during the transpilation so Nest cannot refer to them at run time. There are some possiblities Pipes can give us if they have access to the metatype of the variable at runtime.
  async create(@Body() createCatDto: CreateCatDto) {
    return 'this action creates a new cat';
  }

  @Get()
  async findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit})`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action returns cat #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat.`;
  }

}
