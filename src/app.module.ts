import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MtdatModule } from './mtdat/mtdat.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigService available throughout the app
    }),
    DbModule,  // Your custom mongoose/database module
    MtdatModule, TelegramModule,     // Your feature module(s)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
