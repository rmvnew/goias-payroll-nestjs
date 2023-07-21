import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Profile')
export class Profile {

    @PrimaryColumn({ name: 'profile_id' })
    profileId: string

    @Column({ name: 'profile_name' })
    profileName: string

}
