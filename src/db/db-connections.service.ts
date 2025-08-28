// src/db/db-connection.service.ts
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DbConnectionService implements OnModuleInit {
  private readonly logger = new Logger(DbConnectionService.name);

  constructor(private readonly connection: Connection) {}

  onModuleInit() {
    if (this.connection.isConnected) {
      this.logger.log('Database connection already established.');
    } else {
      this.logger.warn('Database connection is not established.');
    }
  }
}
