import React from 'react'
import { View, Image } from 'react-native'

import { Container, Content, Button, Text, } from 'native-base';
import styles from './styles'
export interface LocationsListProps {
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
    type: string;
    dimension: string;
    residents: [{
        id: string;
        name: string;
        type: string;
        gender: string;
        species: string;
        image: string;
    }]
}

const LocationsList: React.SFC<LocationsListProps> = ({ results, navigation }) => {

    return results.map(({ id, name, type, dimension, residents }: data) => (

        <View key={id} style={styles.container}>
            <Button transparent onPress={() => {
                navigation.navigate('locationsDetails', { name, type, dimension, residents })
            }} style={styles.button}>

                <View style={{ flexDirection: 'row', width: '83%', height: 100 }}>
                    <Text style={styles.text}>
                        Name: {"\n"}
                        {name}
                    </Text>
                    <Text style={styles.text}>
                        Dimension: {"\n"}
                        {dimension}
                    </Text>
                </View>

            </Button>
        </View>

    ));
}

export default LocationsList;