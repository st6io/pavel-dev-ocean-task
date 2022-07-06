import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const backendUrl = 'https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f';
const restLink = new RestLink({ uri: backendUrl });

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
