import { gql, QueryResult, useApolloClient } from '@apollo/client';
import { Business } from '../types/Business';
import { useBusinesses } from './use-businesses';

export const useBusiness = (id: Business['id']): QueryResult => {
  const client = useApolloClient();
  const allBusinessResult = useBusinesses();

  const business = client.readFragment({
    id: `Business:${id}`, // TODO: check if this can be automatically constructed
    fragment: gql`
      fragment BusinessData on Business {
        name
        description
        phone
        image
        email
        address @type(name: "Address") {
          number
          street
          zip
          city
          country
        }
      }
    `,
  });

  return {
    ...allBusinessResult,
    data: business,
  };
};
