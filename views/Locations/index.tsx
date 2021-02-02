import React, { useState } from 'react';
import { View, StatusBar, } from 'react-native'
import { LOCATIONS } from '../../querys';
import { useQuery } from '@apollo/client';

import { Container, Content, Text, Spinner } from 'native-base';

import ViewFooter from '../../components/ViewFooter';
import Search from '../../components/Search';
import LocationsList from '../../components/LocationsList';
import Pagination from '../../components/Pagination';
import styles from './styles';

export interface LocationsProps {
    navigation: any
}

const Locations: React.SFC<LocationsProps> = ({ navigation }) => {

    const [type, setType] = useState<string>("name");
    const [search, setSearch] = useState<string>("");

    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery(LOCATIONS(page, type, search));


    return (
        <Container style={{ backgroundColor: '#d6ffff', }}>
            <StatusBar barStyle="light-content" backgroundColor="#42af2c" />

            <Search
                search={search}
                setSearch={setSearch}
                setPage={setPage}
                setType={setType}
            />

            <Content style={{ alignContent: 'center' }}>
                {loading ?
                    <View style={styles.loading}>
                        <Text>Loading...</Text>
                        <Spinner color='green' />
                    </View>
                    :
                    error ?
                        <Text style={styles.error}>
                            {error.message}
                        </Text>
                        :
                        <>
                            <View style={{ marginBottom: 4 }}>
                                <LocationsList
                                    results={data.locations.results}
                                    navigation={navigation}
                                />
                            </View>

                            <Pagination
                                page={page}
                                setPage={setPage}
                                maxPage={data.locations.info.pages}
                            />
                        </>
                }
            </Content>

            <ViewFooter navigation={navigation} />

        </Container >
    )
}

export default Locations;