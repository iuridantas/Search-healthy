import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    image: string;

    @ApiProperty()
    tall: number;

    @ApiProperty()
    weigth: number;
    
    @ApiProperty()
    @IsString()
    objective: string;
    
    @ApiProperty()
    @IsString()
    gym: string;

    @ApiProperty()
    @IsString()
    services: string;
}
