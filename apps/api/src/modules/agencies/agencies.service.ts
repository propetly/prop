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
    const agency = this.agenciesRepository.create(createAgencyDto);
    return this.agenciesRepository.save(agency);
  }

  findAll() {
    return this.agenciesRepository.find();
  }

  findOne(id: number) {
    return this.agenciesRepository.findOneBy({ id });
  }

  update(id: number, updateAgencyDto: UpdateAgencyDto) {
    return this.agenciesRepository.update(id, updateAgencyDto);
  }

  remove(id: number) {
    return this.agenciesRepository.delete(id);
  }
}
