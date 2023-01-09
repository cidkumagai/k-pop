import { extendType, idArg, list, nonNull, objectType } from 'nexus';

import { Office } from './Office';
import { Member } from './Member';
import { Music } from './Music';

const GRAPHQL_TYPE_ARTIST = 'Artist';
const GRAPHQL_QUERY_FIELD_ARTIST = 'getArtist';
const GRAPHQL_QUERY_FIELD_ALL_ARTISTS = 'allArtists';

export const Artist = objectType({
  name: GRAPHQL_TYPE_ARTIST,
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('debut');
    t.string('photo');
    t.string('logo');
    t.int('officeId');
    t.field('office', { type: Office });
    t.field('member', { type: list(Member) });
    t.field('music', { type: list(Music) });
  },
});

export const artistQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field(GRAPHQL_QUERY_FIELD_ARTIST, {
      type: GRAPHQL_TYPE_ARTIST,
      args: {
        id: nonNull(idArg()),
      },
      resolve(_, args, ctx) {
        const result = ctx.prisma.artist.findUnique({
          where: {
            id: Number(args.id),
          },
          include: {
            office: {
              select: {
                id: true,
                name: true,
              },
            },
            member: {
              select: {
                eName: true,
                jName: true,
                photo: true,
                birth: true,
                type: true,
              },
            },
            music: {
              select: {
                id: true,
                name: true,
                url: true,
                date: true,
              },
            },
          },
        });
        return result;
      },
    });
  },
});

export const allArtistsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field(GRAPHQL_QUERY_FIELD_ALL_ARTISTS, {
      type: GRAPHQL_TYPE_ARTIST,
      resolve(_, __, ctx) {
        const result = ctx.prisma.artist.findMany({
          orderBy: [
            {
              debut: 'asc',
            },
          ],
        });
        return result;
      },
    });
  },
});

export interface ArtistSchema {
  id: number;
  name: string;
  debut: string;
  photo: string;
  logo: string;
}
