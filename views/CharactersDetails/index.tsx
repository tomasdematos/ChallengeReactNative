import React from 'react';

import CharactersInfo from '../../components/CharactersInfo'

import styles from './styles';



export interface CharactersDetailsProps {
    navigation: any,
    route: any
}




const CharactersDetails: React.SFC<CharactersDetailsProps> = ({ route }) => {

    return (
        <CharactersInfo
            data={route.params}
        />



    )

}



export default CharactersDetails;