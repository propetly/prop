import { ChildEntity } from 'typeorm';
import { PropertyType } from '~/modules/properties/constants';
import { Property } from '~/modules/properties/entities/property.entity';

@ChildEntity(PropertyType.NEW_BUILDING)
export class NewBuilding extends Property {}
