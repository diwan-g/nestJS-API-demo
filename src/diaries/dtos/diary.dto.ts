import {Expose,Transform} from 'class-transformer'
import { User } from 'src/users/user.entity'


export class DiaryDto {

    @Expose()
    id: number;
    @Expose()
    entry: string;
    @Expose()
    date_created: string;
    @Expose()
    tags: string;

    @Transform(({obj}) => obj.user.id)
    @Expose()
    userId: number;

}