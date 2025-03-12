"use client";

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://swapi-graphql.netlify.app//graphql' }),
    cache: new InMemoryCache()
});

export function ClientApolloProvider({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default client;