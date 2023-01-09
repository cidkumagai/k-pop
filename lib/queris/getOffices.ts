// Apollo
import { gql, useQuery } from '@apollo/client';
import { ArtistSchema, GetOfficeSchema } from '../../graphql/types';

export interface OfficeArray {
  allOffices: GetOfficeSchema[];
}

export function useGetAllOffices() {
  const getAllOfficesQuery = gql`
    query {
      allOffices {
        id
        name
        artist {
          id
          name
          photo
        }
      }
    }
  `;
  const { data, loading, error } = useQuery<OfficeArray>(getAllOfficesQuery);
  return { data, loading, error };
}
