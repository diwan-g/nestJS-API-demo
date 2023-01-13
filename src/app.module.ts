import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DiariesModule } from './diaries/diaries.module';
import { User } from './users/user.entity';
import { Diary } from './diaries/diary.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Diary],
      synchronize: true,
    }),
    UsersModule,
    DiariesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
