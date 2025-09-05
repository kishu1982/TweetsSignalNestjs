// src/mtdat/mtdat.entity.ts
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Mtdat {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  Symbol: string;

  @Column()
  SymbolFullName: string;

  @Column()
  sideType: string;

  @Column({ unique: true })
  uniqueId: string;

  @Column()
  DateTime: number;

  @Column()
  TypeOfTweet: string;

  @Column('double')
  CMP: number;

  @Column()
  parameterOfType: number;
  @Column({ nullable: true })
  tweetGenerated?: string; // NEW column for generated tweet
}
