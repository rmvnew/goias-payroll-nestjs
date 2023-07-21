import { ApiProperty } from "@nestjs/swagger";
import { FilterPagination } from "src/util/filter.pagination";




export class ProfileFilter extends FilterPagination {

    @ApiProperty({ required: false, default: 'NAME', enum: ['ID', 'NAME'] })
    orderBy: string

    @ApiProperty()
    proifleName: string

}