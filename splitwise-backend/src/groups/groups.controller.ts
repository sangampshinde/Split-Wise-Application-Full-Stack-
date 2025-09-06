import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
 import { User } from '../common/decorators/user.decorator';

@Controller('groups')
@UseGuards(JwtAuthGuard)
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}


  @Post()
  async create(@Body() createGroupDto: CreateGroupDto,@User() user: any){
    return this.groupsService.create(createGroupDto,user.id)
  }

  @Get(':id')
  async findById(@Param('id') id: string){
    return this.groupsService.findById(id);
  }


  
}
