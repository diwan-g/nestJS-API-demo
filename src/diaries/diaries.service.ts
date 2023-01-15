import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diary } from './diary.entity';
import { CreateDiaryDto } from './dtos/create-diary.dto';
import { User } from 'src/users/user.entity';
@Injectable()
export class DiariesService {
    constructor(
        @InjectRepository(Diary) private repo: Repository<Diary>
    ){}

    create(diaryDto: CreateDiaryDto, user: User ){
        const diary = this.repo.create(diaryDto);
        diary.user = user;
        return this.repo.save(diary);

    }

}
