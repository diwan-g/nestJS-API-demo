
import { IsDate, IsString, Min, Max } from "class-validator";

export class CreateDiaryDto {

    @IsString()
    entry: string;

    @IsString()
    date_created: string;

    @IsString()
    tags: string
}