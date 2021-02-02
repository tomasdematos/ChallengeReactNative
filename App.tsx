import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

import Introduction from './views/Introduction'
import Characters from './views/Characters';
import Locations from './views/Locations'
import Episodes from './views/Episodes';
import CharactersDetails from './views/CharactersDetails';
import LocationsDetails from './views/LocationsDetails';
import EpisodesDetails from './views/EpisodesDetails';

function App() {
  return (
    <>

      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="introduction"
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: {
                height: 40,
                backgroundColor: '#42af2c',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
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
              name="charactersDetails"
              component={CharactersDetails}
            />
            <Stack.Screen
              options={{
                title: 'Details',
              }}
              name="locationsDetails"
              component={LocationsDetails}
            />
            <Stack.Screen
              options={{
                title: 'Details',
              }}
              name="episodesDetails"
              component={EpisodesDetails}
            />


          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>

    </>
  );
}

export default App;