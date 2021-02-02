import React, { useState } from 'react';

import { Item, Icon, Input, } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export interface SearchProps {
    search: string;
    setSearch: Function;
    setType: Function;
    setPage: Function

}

const Search: React.SFC<SearchProps> = ({ search, setSearch, setPage, setType }) => {
    const [value, setValue] = useState<string>("name")
    return (
        <Item style={styles.item}>
            <Icon name="search" />
            <Input
                value={search}
                placeholder="Search"
                style={styles.input}
                onChangeText={(e) => {
                    setSearch(e)
                    setPage(1)
                }}
            />
            {
                search !== "" ?
                    <Icon
                        name="reload"
                        onPress={() => {
                            setSearch("")
                            setPage(1)
                        }}
                    />
                    : null
            }
            <Picker
                selectedValue={value}
                style={styles.type}
                onValueChange={(itemValue, itemIndex) => {
                    setValue(itemValue.toString())
                    setType(itemValue.toString())
                }}

            >
                <Picker.Item label="Name" value={"name"} />
                <Picker.Item label="Type" value={"type"} />
            </Picker>

        </Item >
    );
}

export default Search;