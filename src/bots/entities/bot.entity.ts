import { Entity, PrimaryGeneratedColumn, Column, Double, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Bot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 , name:'bot_name'})
  botName: string;

  @Column({type: 'double'})
  budget: number;

  @Column({name: 'is_running'})
  isRunning: boolean

  @Column({name:'session_volatility', type: 'double'})
  sessionVolatility: number;
  

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    name: 'created_at'
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    name: 'updated_at'
  })
  public updatedAt: Date;
}
