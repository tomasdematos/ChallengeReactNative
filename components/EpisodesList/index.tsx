import React from 'react'
import { View, Image } from 'react-native'

import { Container, Content, Button, Text, } from 'native-base';
import styles from './styles'
export interface EpisodesListProps {
    results: results;
    navigation: any
}


interface results {
    [index: number]: data;
    map: Function
}
interface data {
    id: string;
    name: string;
    episode: string;
    air_date: string;
    characters: [{
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
    }]
}

const EpisodesList: React.SFC<EpisodesListProps> = ({ results, navigation }) => {

    return results.map(({ id, name, episode, air_date, characters }: data) => (

        <View key={id} style={styles.container}>
            <Button transparent onPress={() => {
                navigation.navigate('episodesDetails', { name, episode, air_date, characters })
            }} style={styles.button}>

                <View style={{ flexDirection: 'row', width: '83%', height: 100 }}>
                    <Text style={styles.text}>
                        Name: {"\n"}
                        {name}
                    </Text>
                    <Text style={styles.text}>
                        Episode: {"\n"}
                        {episode}
                    </Text>
                </View>

            </Button>
        </View>

    ));
}

export default EpisodesList;