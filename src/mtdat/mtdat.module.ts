import { Module } from '@nestjs/common';
import { MtdatService } from './mtdat.service';
import { MtdatController } from './mtdat.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Mtdat } from './entity/mtdat.entity';
import { TelegramModule } from 'src/telegram/telegram.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Mtdat]), // typeorm module
   TelegramModule,  // <-- Import TelegramModule here
],
  controllers: [MtdatController],
  providers: [MtdatService],
  exports: [MtdatService],
})
export class MtdatModule {}

