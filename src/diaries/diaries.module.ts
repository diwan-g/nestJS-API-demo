import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { Diary } from './diary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diary])],
  controllers: [DiariesController],
  providers: [DiariesService]
})
export class DiariesModule {}
