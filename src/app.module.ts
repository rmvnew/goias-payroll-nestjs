
import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
