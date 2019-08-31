import {Entity, model, property, belongsTo} from '@loopback/repository';

@model({settings: {}})
export class Hero extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Hero)
  friend?: string;

  @property({
    type: 'string',
  })
  planet?: string;

  @property({
    type: 'string',
  })
  species?: string;

  constructor(data?: Partial<Hero>) {
    super(data);
  }
}

export interface HeroRelations {
  // describe navigational properties here
}

export type HeroWithRelations = Hero & HeroRelations;
