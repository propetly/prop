import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgencyDto } from './dto/create-agency.dto';
import { UpdateAgencyDto } from './dto/update-agency.dto';
import { Agency } from '~/modules/agencies/entities/agency.entity';

@Injectable()
export class AgenciesService {
  constructor(
    @InjectRepository(Agency)
    private agenciesRepository: Repository<Agency>,
  ) {}

  create(createAgencyDto: CreateAgencyDto) {
    return 'This action adds a new agency';
  }

  findAll() {
    return `This action returns all agencies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agency`;
  }

  update(id: number, updateAgencyDto: UpdateAgencyDto) {
    return `This action updates a #${id} agency`;
  }

  remove(id: number) {
    return `This action removes a #${id} agency`;
  }
}
