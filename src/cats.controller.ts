import { Controller, Get, Post, Query, Param, Body, Put, Delete, Res, HttpStatus } from "@nestjs/common";
import { ListAllEntities } from "./dto/list-all-entities.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  //we're using a JS class to type this DTO (Data Transfer Object) instead of a TS interface because the js class will be available throughout the life of the program, and interfaces are removed during the transpilation so Nest cannot refer to them at run time. There are some possiblities Pipes can give us if they have access to the metatype of the variable at runtime.
  async create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async findAll(@Res({passthrough: true}) res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action returns cat #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat.`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action removes a #${id} cat.`;
  }

}
