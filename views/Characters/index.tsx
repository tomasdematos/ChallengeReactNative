import React, { useState } from 'react';
import { View, StatusBar, } from 'react-native'
import { CHARACTERS } from '../../querys';
import { useQuery } from '@apollo/client';

import { Container, Content, Text, Spinner } from 'native-base';

import ViewFooter from '../../components/ViewFooter';
import Search from '../../components/Search';
import CharactersList from '../../components/CharactersList';
import Pagination from '../../components/Pagination';
import styles from './styles';


export interface CharactersProps {
    navigation: any
}



const Characters: React.SFC<CharactersProps> = ({ navigation }) => {

    const [type, setType] = useState<string>("name");
    const [search, setSearch] = useState<string>("");

    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery(CHARACTERS(page, type, search));


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
                                <CharactersList
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
                }
            </Content>

            <ViewFooter navigation={navigation} />

        </Container >
    )
}



export default Characters;