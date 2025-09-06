import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UsersService } from '../users/users.service';




@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    private usersService: UsersService,
  ){}


  // Create Group
  async create(createGroupDto: CreateGroupDto, createdById: string){
    const { name, memberIds } = createGroupDto;
    const createdBy = await this.usersService.findById(createdById);
    const members = await Promise.all(memberIds.map((id) => this.usersService.findById(id)))
     const group = this.groupsRepository.create({
         name,
         createdBy,
         members: [createdBy, ...members],
       });
    return this.groupsRepository.save(group);
  }

  async findById(id: string) {
    
  const group = await this.groupsRepository.findOne({
     where: { id },
     relations: ['createdBy', 'members', 'expenses'],
  })
  
  if (!group) throw new NotFoundException('Group not found');

  return group;

  }
}
