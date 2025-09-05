import { IsString, IsNumber, IsIn } from 'class-validator';

export class CreateMtdatDto {
  @IsString({ message: 'Symbol must be present' })
  Symbol: string;

  @IsString({ message: 'Symbol Name must be present' })
  SymbolFullName: string;

  @IsString({ message: 'Side must be defined' })
  @IsIn(['Up', 'Down'])
  sideType: 'Up' | 'Down';

  @IsString({ message: 'UniqueId required' })
  uniqueId: string;

  @IsNumber()
  DateTime: number;

  @IsString({ message: 'Type must be present' })
  TypeOfTweet: string;

  @IsNumber()
  CMP: number;

  @IsNumber()
  parameterOfType: number;
}
