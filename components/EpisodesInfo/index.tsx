import React from 'react';
import { View, StatusBar } from 'react-native'

import { Container, Content, Text, List, ListItem, Thumbnail, Button } from 'native-base';

import styles from './styles';

export interface EpisodesInfoProps {
    data: data;
    navigation: any
}

interface data {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: [{
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
    }];
}


const EpisodesInfo: React.SFC<EpisodesInfoProps> = ({ data, navigation }) => {
    const { name, air_date, episode, characters } = data;

    const fiveCharacters = () => characters.slice(0, 5).map(({ id, name, image, type, gender, species }) => (

        <View key={id} style={styles.characters} >
            <Button
                style={styles.charactersButton}
                onPress={() => navigation.push('charactersDetails', { id, name, image, type, gender, species })}>
                <Thumbnail large source={{ uri: image }} />
                <Text style={{ marginLeft: 10, maxWidth: '80%' }}>{name}</Text>
            </Button>
        </View>

    ))

    return (
        <Container style={{ backgroundColor: '#b3f17f', }}>
            <StatusBar barStyle="light-content" backgroundColor="#42af2c" />

            <Content style={{ alignContent: 'center' }}>

                <View style={styles.dataContainer}>
                    <List>
                        {name ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Name: </Text>
                                <Text>{name}</Text>
                            </ListItem>
                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Name: </Text>
                                <Text>Unknown</Text>
                            </ListItem>
                        }

                        {air_date ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Released: </Text>
                                <Text>{air_date}</Text>
                            </ListItem>

                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Released: </Text>
                                <Text>Unknown</Text>
                            </ListItem>}

                        {episode ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Episode: </Text>
                                <Text>{episode}</Text>
                            </ListItem>
                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Episode: </Text>
                                <Text>Unknown</Text>
                            </ListItem>
                        }
                        {fiveCharacters()}

                    </List>

                </View>
            </Content>

        </Container >

    )



}



export default EpisodesInfo;