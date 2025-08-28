// src/db/db.module.ts
import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Mtdat } from 'src/mtdat/entity/mtdat.entity';
import { DbConnectionService } from './db-connections.service';

// Adjust the path as necessary

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigService available app-wide
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get<string>('MONGODB_URI'),
        // entities: [Mtdat],
        autoLoadEntities: true,
        synchronize: true, // disable in prod
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [DbConnectionService],
})
export class DbModule {}
