
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { SpbuService } from './spbu.service.js';
import { CreateSpbuDto } from './dto/create-spbu.dto.js';
import { UpdateSpbuDto } from './dto/update-spbu.dto.js';

@Controller('spbu')
export class SpbuController {
  constructor(private readonly spbuService: SpbuService) {}

  @Post()
  create(@Body() createSpbuDto: CreateSpbuDto) {
    return this.spbuService.create(createSpbuDto);
  }

  @Get()
  findAll() {
    return this.spbuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.spbuService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSpbuDto: UpdateSpbuDto,
  ) {
    return this.spbuService.update(id, updateSpbuDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.spbuService.remove(id);
  }
}
