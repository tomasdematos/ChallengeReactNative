import React from 'react'

import { View, } from 'react-native'
import { Text, Button } from 'native-base';
import { Picker } from '@react-native-picker/picker';


import styles from './styles'

export interface PaginationProps {
    page: number;
    setPage: Function;
    maxPage: number;
}

const Pagination: React.SFC<PaginationProps> = ({ page, setPage, maxPage }) => {

    const pages = () => {
        const element = [];
        for (let i = 1; i <= maxPage; i++) {

            element[i] = i;

        }
        return element.map((x) => (

            <Picker.Item label={`${x.toString()}`} value={x} key={x} />

        ))
    }


    return (
        <View style={styles.content}>
            <Button
                style={styles.buttonPrev}
                onPress={() => {
                    if (page > 1) {
                        setPage(page - 1)
                    }
                }}>
                <Text style={styles.buttonText}>PREV</Text>
            </Button>
            <Picker
                selectedValue={page}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                    setPage(itemIndex + 1)
                }}

            >
                {pages()}
            </Picker>
            <Button
                style={styles.buttonNext}
                onPress={() => {
                    if (page < maxPage) {
                        setPage(page + 1)
                    }

                }}
            >
                <Text style={styles.buttonText}>NEXT</Text>
            </Button>

        </View>
    );
}

export default Pagination;