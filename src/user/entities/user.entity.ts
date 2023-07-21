import { Profile } from "src/profile/entities/profile.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";



@Entity('tb_user')
export class User {


    @PrimaryColumn({name:'user_id'})
    userId: string

    @Column({name:'user_name'})
    userName: string

    @Column({name:'user_email'})
    userEmail: string

    @Column({name:'user_password'})
    userPassword: string

    @Column({name:'user_first_access'})
    userFirstAccess: boolean

    @Column({name:'is_active'})
    isActive: boolean

    @CreateDateColumn({name:'create_at'})
    createAt: Date

    @UpdateDateColumn({name:'update_at'})
    updateAt: Date

    @ManyToMany(() => Profile, { eager: true })
    @JoinTable({
        name: 'user_profile',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'userId'
        },
        inverseJoinColumn: {
            name: 'profile_id',
            referencedColumnName: 'profileId'
        }
    })
    profiles: Profile[];


}
