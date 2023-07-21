
import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
    UserModule,
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
