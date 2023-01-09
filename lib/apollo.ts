import {
  ApolloClient,
  ApolloClientOptions,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const apolloClientOptions: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: '/api/graphql', fetch }),
};

const apolloClient = new ApolloClient(apolloClientOptions);

export default apolloClient;
