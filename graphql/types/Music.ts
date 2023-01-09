import { objectType } from 'nexus';

import { Artist } from './Artist';

const GRAPHQL_TYPE_MUSIC = 'music';

export const Music = objectType({
  name: GRAPHQL_TYPE_MUSIC,
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('url');
    t.string('date');
    t.int('artistId');
    t.field('artist', { type: Artist });
  },
});

export interface MusicSchema {
  id: string;
  name: string;
  url: string;
  date: string;
}
