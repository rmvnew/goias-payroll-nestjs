import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileFilter } from './dto/profile.filter';
import { getProfilePath } from 'src/shared/routes.path';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) { }

  @Post()
  async create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  async findAll(
    @Query() filter: ProfileFilter
  ) {

    const { limit } = filter

    filter.limit = limit > 10 ? 10 : limit

    filter.route = getProfilePath()

    return this.profileService.findAll(filter);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }


}
