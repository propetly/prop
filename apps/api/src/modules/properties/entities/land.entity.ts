import { ChildEntity } from 'typeorm';
import { PropertyType } from '~/modules/properties/constants';
import { Property } from '~/modules/properties/entities/property.entity';

@ChildEntity(PropertyType.LAND)
export class Land extends Property {}
