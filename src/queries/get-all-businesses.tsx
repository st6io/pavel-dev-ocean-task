import { gql } from '@apollo/client';

export const getAllBusinesses = gql`
  query AllBusinesses {
    businesses @rest(type: "Business", path: "/") {
      name
      id
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
  }
`;
