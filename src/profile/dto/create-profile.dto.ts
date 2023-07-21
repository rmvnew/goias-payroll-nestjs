import { ApiProperty } from "@nestjs/swagger";


export class CreateProfileDto {

    @ApiProperty()
    profileName:string

}
