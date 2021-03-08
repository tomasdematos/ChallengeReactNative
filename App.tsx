import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator<RootStackParamList>();

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export type RootStackParamList = {
  characters: undefined;
  episodes: undefined;
  locations: undefined;
  introduction: undefined;
  details: {
    id: string;
    name: string;
    type?: string;
    gender?: string;
    species?: string;
    image?: string;
    dimension?: string;
    residents?: [
      {
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
      },
    ];

    episode?: string;
    air_date?: string;
    characters?: [
      {
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
      },
    ];
  };
  charactersDetails: {
    name: string;
    type: string;
    gender: string;
    species: string;
    image: string;
  };
  locationsDetails: {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: [
      {
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
      },
    ];
  };
  episodesDetails: {
    id: string;
    name: string;
    episode: string;
    air_date: string;
    characters: [
      {
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
      },
    ];
  };
};

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

// Views
import Introduction from './views/Introduction';
import Characters from './views/Characters';
import Locations from './views/Locations';
import Episodes from './views/Episodes';
import Details from './views/Details';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="introduction"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                height: 40,
                backgroundColor: '#42af2c',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              options={{ headerShown: false }}
              name="introduction"
              component={Introduction}
            />
            <Stack.Screen
              options={{
                title: 'Characters',
              }}
              name="characters"
              component={Characters}
            />
            <Stack.Screen
              options={{
                title: 'Locations',
              }}
              name="locations"
              component={Locations}
            />
            <Stack.Screen
              options={{
                title: 'Episodes',
              }}
              name="episodes"
              component={Episodes}
            />
            <Stack.Screen
              options={{
                title: 'Details',
              }}
              name="details"
              component={Details}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
}

export default App;
