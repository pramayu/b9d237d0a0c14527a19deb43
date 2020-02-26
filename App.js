import React from 'react';
import {ApolloClient} from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-community/async-storage';
import {ApolloProvider} from 'react-apollo';

import { MainRoute } from './app/routes/index';
import ClassRoom from './app/screens/dashboard/classroom/classroom';
import ListBook from './app/screens/dashboard/classroom/books/listbook';

const authLink = setContext(async(_,{headers}) => {
  const x_access_token  = await AsyncStorage.getItem('accesstoken');
  const x_refresh_token = await AsyncStorage.getItem('refreshtoken');
  return {
    headers: {
      ...headers,
      'x-access-token'  : x_access_token ? `Bearer ${x_access_token}` : "",
      'x-refresh-token' : x_refresh_token ? `Bearer ${x_refresh_token}` : ""
    }
  }
});

const httpLink = new HttpLink({
  uri: 'http://192.168.43.223:5000/graphql'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {
    Query: {
      current_user: async(parent, args, {cache}) => {
        const user = await AsyncStorage.getItem('accesstoken')
        if(user) {
          const data = {
            current_user: {
              __typename    : 'current_user',
              id            : user.id,
              strid         : user.strid
            }
          }
          cache.writeData({data});
          return data.current_user
        }
      }
    }
  }
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainRoute />
    </ApolloProvider>
  )
};

export default App;
