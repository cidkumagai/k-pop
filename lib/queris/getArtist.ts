// Apollo
import { gql, useQuery } from '@apollo/client';
import { ArtistSchema, MemberSchema, MusicSchema, OfficeSchema } from '../../graphql/types';

export interface ArtistArray {
  allArtists: ArtistSchema[];
}

export function useGetAllArtists() {
  const getAllArtistsQuery = gql`
    query {
      allArtists {
        id
        name
        debut
        photo
      }
    }
  `;
  const { data, loading, error } = useQuery<ArtistArray>(getAllArtistsQuery);
  return { data, loading, error };
}

export interface GetArtist extends ArtistSchema {
  office: OfficeSchema
  member: MemberSchema[];
  music: MusicSchema[];
}

export interface GetArtistSchema {
  getArtist: GetArtist;
}

export function useGetArtistById(id: string) {
  const getArtistQuery = gql`
    query ($id: ID!) {
      getArtist(id: $id) {
        id
        name
        debut
        photo
        logo
        office {
          id
          name
        }
        member {
          eName
          jName
          photo
          birth
          type
        }
        music {
          id
          name
          url
          date
        }
      }
    }
  `;
  const { data, loading, error } = useQuery<GetArtistSchema>(getArtistQuery, {
    variables: { id: id },
  });
  return { data, loading, error };
}
