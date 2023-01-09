import { extendType, list, objectType } from 'nexus';

import { Artist, ArtistSchema } from './Artist';

const GRAPHQL_TYPE_OFFICE = 'Office';
const GRAPHQL_QUERY_FIELD_ALL_OFFICES = 'allOffices';

export const Office = objectType({
  name: GRAPHQL_TYPE_OFFICE,
  definition(t) {
    t.id('id');
    t.string('name');
    t.field('artist', { type: list(Artist) });
  },
});

export const allOffices = extendType({
  type: 'Query',
  definition(t) {
    t.list.field(GRAPHQL_QUERY_FIELD_ALL_OFFICES, {
      type: GRAPHQL_TYPE_OFFICE,
      resolve(_, __, ctx) {
        return ctx.prisma.office.findMany({
          include: {
            artist: {
              select: {
                id: true,
                name: true,
                photo: true,
              },
            },
          },
        });
      },
    });
  },
});

export interface OfficeSchema {
  id: string;
  name: string;
}

export interface GetOfficeSchema extends OfficeSchema {
  artist: ArtistSchema[];
}
