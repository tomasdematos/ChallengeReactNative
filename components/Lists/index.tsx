import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';

import { Button, Text } from 'native-base';
import styles from './styles';

export interface Props {
  results: [
    {
      id: string;
      name: string;
      image?: string;
      type?: string;
      gender?: string;
      species?: string;

      dimension?: string;
      residents?: [
        {
          id: string;
          name: string;
          type: string;
          gender: string;
          species: string;
          image: string;
        },
      ];

      episode?: string;
      air_date?: string;
      characters?: [
        {
          id: string;
          name: string;
          type: string;
          gender: string;
          species: string;
          image: string;
        },
      ];
    },
  ];
  navigation: ProfileScreenNavigationProp;
}

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const Lists: React.FC<Props> = ({ results, navigation }) => {
  const Results = results.map(
    ({
      id,
      name,
      type,
      gender,
      species,
      image,
      dimension,
      residents,
      episode,
      air_date,
      characters,
    }): ReactElement => (
      <View key={id} style={styles.container}>
        <Button
          transparent
          onPress={() => {
            if (
              type !== undefined &&
              gender !== undefined &&
              species !== undefined &&
              image !== undefined
            ) {
              navigation.navigate('details', {
                id,
                name,
                type,
                gender,
                species,
                image,
              });
            }
            if (
              name !== undefined &&
              type !== undefined &&
              dimension !== undefined &&
              residents !== undefined
            ) {
              navigation.navigate('details', {
                id,
                name,
                type,
                dimension,
                residents,
              });
            }

            if (
              name !== undefined &&
              episode !== undefined &&
              air_date !== undefined &&
              characters !== undefined
            ) {
              navigation.navigate('details', {
                id,
                name,
                episode,
                air_date,
                characters,
              });
            }
          }}
          style={styles.button}>
          {image && <Image style={styles.tinyLogo} source={{ uri: image }} />}

          <View style={styles.nameContainer}>
            <Text style={styles.text}>
              Name: {'\n'}
              {name}
            </Text>
          </View>
          {(dimension || episode) && (
            <View style={styles.secondContainer}>
              <Text style={styles.text}>
                {dimension !== undefined &&
                  (dimension !== 'unknown'
                    ? ` ${dimension}`
                    : `Dimension: ${dimension}`)}
                {episode !== undefined && `Episode: \n ${episode}`}
              </Text>
            </View>
          )}
        </Button>
      </View>
    ),
  );

  return <>{Results}</>;
};
export default Lists;
