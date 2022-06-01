import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Game } from './Game';
import { User } from '../../users/entities/User';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Game, (game) => game.orders)
  @JoinTable()
  games: Game[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;
}
