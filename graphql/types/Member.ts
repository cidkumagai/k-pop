import { objectType } from 'nexus';

import { Artist } from './Artist';

const GRAPHQL_TYPE_MEMBER = 'Member';

export const Member = objectType({
  name: GRAPHQL_TYPE_MEMBER,
  definition(t) {
    t.id('id');
    t.string('eName');
    t.string('jName');
    t.string('photo');
    t.string('birth');
    t.string('type');
    t.int('artistId');
    t.field('artist', { type: Artist });
  },
});

export interface MemberSchema {
  id: number;
  eName: string;
  jName: string;
  photo: string;
  birth: string;
  type: string;
}
