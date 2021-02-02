import React from 'react'
import { View, Image } from 'react-native'

import { Button, Text, } from 'native-base';
import styles from './styles'
export interface CharatersListProps {
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
    gender: string;
    species: string;
    image: string;
}

const CharatersList: React.SFC<CharatersListProps> = ({ results, navigation }) => {

    return results.map(({ id, name, type, gender, species, image, }: data) => (

        <View key={id} style={styles.container}>
            <Button transparent onPress={() => {
                navigation.navigate('charactersDetails', { name, type, gender, species, image })
            }} style={styles.button}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: image }}
                />
                <View style={{ width: '83%' }}>
                    <Text style={styles.text}>
                        Name: {"\n"}
                        {name}
                    </Text>
                </View>
            </Button>
        </View>

    ));
}

export default CharatersList;