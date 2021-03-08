import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { CHARACTERS } from '../../querys';
import { useQuery } from '@apollo/client';

import { Container, Content, Text, Spinner } from 'native-base';

import ViewFooter from '../../components/ViewFooter';
import Search from '../../components/Search';
import Lists from '../../components/Lists';
import Pagination from '../../components/Pagination';
import styles from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export interface Props {
  navigation: ProfileScreenNavigationProp;
}
interface data {
  characters: {
    results: [
      {
        id: string;
        name: string;
        image: string;
        type: string;
        gender: string;
        species: string;
      },
    ];
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
  };
}

const Characters: React.FC<Props> = ({ navigation }) => {
  const [type, setType] = useState<string>('name');
  const [search, setSearch] = useState<string>('');

  const [page, setPage] = useState<number>(1);

  const { loading, error, data } = useQuery<data>(
    CHARACTERS(page, type, search),
  );

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#42af2c" />

      <Search
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        setType={setType}
      />

      <Content style={styles.content}>
        {loading ? (
          <View style={styles.loading}>
            <Text>Loading...</Text>
            <Spinner color="green" />
          </View>
        ) : error ? (
          <Text style={styles.error}>{error.message}</Text>
        ) : data ? (
          <>
            <View style={styles.list}>
              <Lists
                results={data.characters.results}
                navigation={navigation}
              />
            </View>

            <Pagination
              page={page}
              setPage={setPage}
              maxPage={data.characters.info.pages}
            />
          </>
        ) : (
          <>
            <Text style={styles.error}>Data Not Found</Text>
          </>
        )}
      </Content>

      <ViewFooter navigation={navigation} />
    </Container>
  );
};

export default Characters;
