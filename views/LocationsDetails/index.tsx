import React from 'react';


import LocationsInfo from '../../components/LocationsInfo'



export interface LocationsDetailsProps {
    navigation: any,
    route: any
}




const LocationsDetails: React.SFC<LocationsDetailsProps> = ({ route, navigation }) => {

    return (

        <LocationsInfo
            data={route.params}
            navigation={navigation}
        />


    )

}



export default LocationsDetails;