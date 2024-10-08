import {
  Entity,
  Column,
  TableInheritance,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from '~/common';
// import { PropertyType } from '../constants';

// @TableInheritance({
//   column: { type: 'enum', enum: PropertyType, name: 'type' },
// })
@Entity()
export class Property extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  address: string;

  @Column({ default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
