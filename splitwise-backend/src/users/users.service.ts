import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from '../auth/dto/register.dto';
import { CacheService } from '../cache/cache.service';




@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private cacheService: CacheService,
  ){}

    async create(registerDto: RegisterDto) {

       const user = this.usersRepository.create(registerDto);

       const savedUser = await this.usersRepository.save(user);

       await this.cacheService.set(`user:${savedUser.id}`, savedUser, 3600);

       return savedUser;
     }

     async findByEmail(email: string) {

       const cached = await this.cacheService.get<User>(`user:email:${email}`);

       if (cached) return cached;

       const user = await this.usersRepository.findOne({ where: { email } });

       if (user) await this.cacheService.set(`user:email:${email}`, user, 3600);

       return user;

     }

     async findById(id: string) {

      const cached = await this.cacheService.get<User>(`user:${id}`);

      if (cached) return cached;

      const user = await this.usersRepository.findOne({ where: { id } });

      if (!user) throw new NotFoundException('User not found');

      await this.cacheService.set(`user:${id}`, user, 3600);

      return user;

     }
  
}
