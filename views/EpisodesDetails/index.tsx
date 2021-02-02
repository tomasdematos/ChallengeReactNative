import React from 'react';


import EpisodesInfo from '../../components/EpisodesInfo'



export interface EpisodesDetailsProps {
    navigation: any,
    route: any
}




const EpisodesDetails: React.SFC<EpisodesDetailsProps> = ({ route, navigation }) => {

    return (

        <EpisodesInfo
            data={route.params}
            navigation={navigation}
        />


    )

}



export default EpisodesDetails;