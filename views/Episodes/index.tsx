import React, { useState } from 'react';
import { View, StatusBar, } from 'react-native'
import { EPISODES } from '../../querys';
import { useQuery } from '@apollo/client';

import { Container, Content, Text, Spinner } from 'native-base';

import ViewFooter from '../../components/ViewFooter';
import Search from '../../components/Search';
import EpisodesList from '../../components/EpisodesList';
import Pagination from '../../components/Pagination';

import styles from './styles';

export interface EpisodesProps {
    navigation: any
}

const Episodes: React.SFC<EpisodesProps> = ({ navigation }) => {

    const [type, setType] = useState<string>("name");
    const [search, setSearch] = useState<string>("");

    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery(EPISODES(page, type, search));


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
                                <EpisodesList
                                    results={data.episodes.results}
                                    navigation={navigation}
                                />
                            </View>

                            <Pagination
                                page={page}
                                setPage={setPage}
                                maxPage={data.episodes.info.pages}
                            />
                        </>
                }
            </Content>

            <ViewFooter navigation={navigation} />

        </Container >
    )
}

export default Episodes;