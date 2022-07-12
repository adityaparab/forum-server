import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoDbConnectionString } from './app.util';

console.log(getMongoDbConnectionString());

@Module({
  imports: [
    MongooseModule.forRoot(getMongoDbConnectionString(), { retryAttempts: 1 }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
