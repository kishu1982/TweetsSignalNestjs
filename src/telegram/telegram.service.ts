import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TelegramService {
  private readonly botToken: string;
  private readonly chatId: string;

  constructor(private readonly configService: ConfigService) {
    this.botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN') ?? '';
    this.chatId = this.configService.get<string>('TELEGRAM_CHAT_ID') ?? '';
  }

  async sendMessage(message: string): Promise<void> {
    if (!this.botToken || !this.chatId) {
      throw new HttpException('Telegram bot token or chat ID not configured', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const telegramUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    try {
      const response = await axios.post(telegramUrl, {
        chat_id: this.chatId,
        text: message,
        parse_mode: 'Markdown',
      });

      if (!response.data.ok) {
        throw new Error('Failed to send message on Telegram');
      }
    } catch (error) {
      throw new HttpException(`Telegram Error: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}





/*
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTelegramDto } from './dto/create-telegram.dto';
import { UpdateTelegramDto } from './dto/update-telegram.dto';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class TelegramService {
  // importing data 
  private readonly botToken : string;
  private readonly chatId : string;
  // creating constructor to initialize the variables
  constructor(private readonly configService: ConfigService){
    this.botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN') ?? '';
    this.chatId = this.configService.get<string>('TELEGRAM_CHAT_ID') ?? '';
  }

  async sendMessage(message: string): Promise<void> {
    if (!this.botToken || !this.chatId) {
      throw new HttpException('Telegram bot token or chat ID not configured', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    const telegramUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    try {
      const response = await axios.post(telegramUrl, {
        chat_id: this.chatId,
        text: message,
        parse_mode: 'Markdown',
      });

      if (!response.data.ok) {
        throw new Error('Failed to send message on Telegram');
      }
    } catch (error) {
      throw new HttpException(`Telegram Error: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  findAll() {
    return `This action returns all telegram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} telegram`;
  }

  update(id: number, updateTelegramDto: UpdateTelegramDto) {
    return `This action updates a #${id} telegram`;
  }

  remove(id: number) {
    return `This action removes a #${id} telegram`;
  }
}

*/