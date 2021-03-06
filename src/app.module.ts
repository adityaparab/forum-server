import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoDbConnectionString } from './app.util';
import { UsersModule } from './modules/user/user.module';

console.log(getMongoDbConnectionString());

@Module({
  imports: [MongooseModule.forRoot(getMongoDbConnectionString()), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
