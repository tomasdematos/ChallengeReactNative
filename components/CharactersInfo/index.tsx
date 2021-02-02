import React from 'react';
import { View, StatusBar, Image } from 'react-native'

import { Container, Content, Text, List, ListItem } from 'native-base';

import styles from './styles';


export interface CharactersInfoProps {
    data: data
}

interface data {
    id: string;
    name: string;
    type: string;
    gender: string;
    species: string;
    image: string;
}


const CharactersInfo: React.SFC<CharactersInfoProps> = ({ data }) => {
    const { name, type, gender, species, image } = data;
    return (
        <Container style={{ backgroundColor: '#b3f17f', }}>
            <StatusBar barStyle="light-content" backgroundColor="#42af2c" />

            <Content style={{ alignContent: 'center' }}>
                {image ?
                    <Image
                        style={styles.image}
                        source={{ uri: image }}
                    />
                    :
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg' }}
                    />}

                <View style={styles.dataContainer}>
                    <List>
                        {name ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Name: </Text>
                                <Text>{name}</Text>
                            </ListItem>
                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Gender: </Text>
                                <Text>Unknown</Text>
                            </ListItem>
                        }

                        {type ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Type: </Text>
                                <Text>{type}</Text>
                            </ListItem>

                            : null}

                        {gender ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Gender: </Text>
                                <Text>{gender}</Text>
                            </ListItem>
                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Gender: </Text>
                                <Text>Unknown</Text>
                            </ListItem>
                        }

                        {species ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Specie: </Text>
                                <Text>{species}</Text>
                            </ListItem>
                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Specie: </Text>
                                <Text>Unknown</Text>
                            </ListItem>
                        }
                    </List>

                </View>
            </Content>

        </Container >

    )



}



export default CharactersInfo;