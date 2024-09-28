import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
