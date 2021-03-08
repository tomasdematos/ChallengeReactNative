import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { LOCATIONS } from '../../querys';
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

const Locations: React.FC<Props> = ({ navigation }) => {
  const [type, setType] = useState<string>('name');
  const [search, setSearch] = useState<string>('');

  const [page, setPage] = useState<number>(1);

  const { loading, error, data } = useQuery(LOCATIONS(page, type, search));

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
        ) : (
          <>
            <View style={styles.list}>
              <Lists results={data.locations.results} navigation={navigation} />
            </View>

            <Pagination
              page={page}
              setPage={setPage}
              maxPage={data.locations.info.pages}
            />
          </>
        )}
      </Content>

      <ViewFooter navigation={navigation} />
    </Container>
  );
};

export default Locations;
