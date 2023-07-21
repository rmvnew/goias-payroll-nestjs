import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProfileFilter } from './dto/profile.filter';
import { SortingType } from 'src/shared/enums';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class ProfileService {


  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>
  ) { }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {


    const { profileName } = createProfileDto

    const profile = this.profileRepository.create(createProfileDto)

    profile.profileId = uuidv4()

    profile.profileName = profileName.toUpperCase()

    return this.profileRepository.save(profile)
  }

  async findAll(filter: ProfileFilter): Promise<Pagination<Profile>> {

    const { orderBy, sort, proifleName } = filter

    const queryBuilder = this.profileRepository.createQueryBuilder('profile')

    const profile = this.profileRepository
      .createQueryBuilder('profile')





    if (proifleName) {
      profile
        .where('profile.profile_name = :profile.profile_name', { proifleName })

    }


    if (orderBy == SortingType.ID) {

      profile.orderBy('profile.profile_id', `${sort === 'DESC' ? 'DESC' : 'ASC'}`)


    } else {

      profile.orderBy('profile.profile_name', `${sort === 'DESC' ? 'DESC' : 'ASC'}`)


    }

    filter.limit = filter.limit ?? (await queryBuilder.getMany()).length;

    const page = await paginate<Profile>(profile, filter)

    page.links.first = page.links.first === '' ? '' : `${page.links.first}&sort=${sort}&orderBy=${orderBy}`
    page.links.previous = page.links.previous === '' ? '' : `${page.links.previous}&sort=${sort}&orderBy=${orderBy}`
    page.links.last = page.links.last === '' ? '' : `${page.links.last}&sort=${sort}&orderBy=${orderBy}`
    page.links.next = page.links.next === '' ? '' : `${page.links.next}$sort=${sort}$orderBy=${orderBy}`

    return page
  }

  async findOne(id: string): Promise<Profile> {
    return this.profileRepository.findOne({
      where: {
        profileId: id
      }
    })
  }

  
}
