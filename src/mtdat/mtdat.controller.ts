import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MtdatService } from './mtdat.service';
import { UpdateMtdatDto } from './dto/update-mtdat.dto';
import { Mtdat } from './entity/mtdat.entity';


@Controller('v1/mtdat')
export class MtdatController {
   constructor(private readonly mtdatService: MtdatService) {}


    @Post()
 async create(@Body() data: any) {
//  async create(@Body() data: Partial<Mtdat>): Promise<Mtdat> {
  //  console.log('POST /mt_data received:', body);
  //  console.log("body data : ",data);
  //  console.log("body data : ",data.Symbol);
    // return this.service.create(body);
      return this.mtdatService.saveData(data);
  }

  @Get()
  findAll() {
    return this.mtdatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this actions send backs single data`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMtdatDto: UpdateMtdatDto) {
    return `this action updates data`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this data deletes`;
  }
}
