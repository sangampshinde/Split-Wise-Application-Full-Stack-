
import { IsString, IsArray } from 'class-validator';
export class CreateGroupDto {

@IsString()
name!: string;

@IsArray()
memberIds!: string[];
}

