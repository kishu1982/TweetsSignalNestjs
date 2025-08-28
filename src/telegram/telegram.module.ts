import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegramService } from './telegram.service';

@Module({
  imports: [ConfigModule], // import ConfigModule to use ConfigService
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
