import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import {CreateDiaryDto } from './dtos/create-diary.dto'
import { DiariesService } from './diaries.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { DiaryDto }  from './dtos/diary.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
@Controller('diaries')
export class DiariesController {

    constructor(private diaryService: DiariesService){}

    @Post()
    @UseGuards(AuthGuard)
    @Serialize(DiaryDto)
    createDiary(@Body() body: CreateDiaryDto, @CurrentUser() user: User) {
        return this.diaryService.create(body, user);
    }



}
