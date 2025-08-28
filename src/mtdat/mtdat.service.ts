import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mtdat } from './entity/mtdat.entity';
import { TelegramService } from 'src/telegram/telegram.service';
import { tweetTemplates } from './dto/tweet-templates';
import { Console } from 'console';

// adding function to replace templete strings
function fillTemplate(template: string, data: { [key: string]: any }) {
  return template.replace(/\${(\w+)}/g, (_, key) => data[key] ?? '');
}

@Injectable()
export class MtdatService {
  constructor(
    @InjectRepository(Mtdat)
    private readonly mtdatRepository: Repository<Mtdat>,
    private readonly telegramService: TelegramService,
  ) {}
  // ...existing code...
  async saveData(data: Partial<Mtdat>) {
    const existingData = await this.mtdatRepository.findOne({
      where: { uniqueId: data.uniqueId },
    });
    if (existingData) {
      console.log(`Data with uniqueId ${data.uniqueId} already exists.`);
      return 'dataExists';
    }

    try {
      // making dynamic tweet using template
      // Example usage
      const type =
        typeof data.TypeOfTweet === 'string' ? data.TypeOfTweet : 'Default';
      const template = type ? tweetTemplates[type] : undefined;
      if (template) {
        let message = fillTemplate(template, data); // data must have Symbol and CMP
        // Append the followupString if present
        if (tweetTemplates.followUpString) {
          message += ' ' + tweetTemplates.followUpString;
        }

        // const message = tweet;
        await this.telegramService.sendMessage(message);
        console.log(message);

        // Add generated tweet to the data object before saving
        data.tweetGenerated = message;
        console.log('Generated Tweet:', data.tweetGenerated);
      } else {
        console.log('Template not found');
      }
      // save data to database
      const entity = this.mtdatRepository.create(data);
      const dataSaved = await this.mtdatRepository.save(entity);
      // now return dataSaved
      console.log(`Data saved:`, dataSaved);
    } catch (error) {
      console.error('Failed to send message to Telegram:', error.message);
    }

    return 'dataSaved';
  }

  // async saveData(data: Partial<Mtdat>) {
  // // async saveData(data: Partial<Mtdat>): Promise<Mtdat> {
  //    const entity = this.mtdatRepository.create(data);
  //   const dataSaved = await this.mtdatRepository.save(entity);
  //   console.log(`data saved :`, dataSaved);
  //    return 'dataSaved';
  // }
  // ...existing code...
  findAll() {
    return `This action returns all mtdat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mtdat`;
  }

  update(id: number, updateMtdatDto: Mtdat) {
    return `This action updates a #${id} mtdat`;
  }

  remove(id: number) {
    return `This action removes a #${id} mtdat`;
  }
}
