import React from 'react';
import { View, StatusBar } from 'react-native'

import { Container, Content, Text, List, ListItem, Thumbnail, Button } from 'native-base';

import styles from './styles';

export interface LocationsInfoProps {
    data: data;
    navigation: any
}

interface data {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: [{
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
    }];
}


const LocationsInfo: React.SFC<LocationsInfoProps> = ({ data, navigation }) => {
    const { name, type, dimension, residents } = data;

    const fiveCharacters = () => residents.slice(0, 5).map(({ id, name, image, type, gender, species }) => (

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

                        {type ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Type: </Text>
                                <Text>{type}</Text>
                            </ListItem>

                            : null}

                        {dimension ?
                            <ListItem itemDivider style={styles.data}>
                                <Text>Dimension: </Text>
                                <Text>{dimension}</Text>
                            </ListItem>
                            :
                            <ListItem itemDivider style={styles.data}>
                                <Text>Dimension: </Text>
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



export default LocationsInfo;