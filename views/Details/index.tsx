import React, { ReactElement } from 'react';
import { View, StatusBar, Image } from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Thumbnail,
  Button,
} from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import styles from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export interface Props {
  navigation: ProfileScreenNavigationProp;
  route: {
    params: {
      id: string;
      name: string;
      type?: string;
      gender?: string;
      species?: string;
      image?: string;

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
    };
  };
}
interface characters {
  id: string;
  name: string;
  type: string;
  gender: string;
  species: string;
  image: string;
}

const Details: React.FC<Props> = ({ route, navigation }) => {
  const fiveCharacters = (characters: [characters]) =>
    characters.slice(0, 5).map(
      ({ id, name, image, type, gender, species }): ReactElement => (
        <View key={id} style={styles.characters}>
          <Button
            style={styles.charactersButton}
            onPress={() =>
              navigation.push('details', {
                id,
                name,
                image,
                type,
                gender,
                species,
              })
            }>
            <Thumbnail large source={{ uri: image }} />
            <Text style={styles.nameText}>{name}</Text>
          </Button>
        </View>
      ),
    );

  const {
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
  } = route.params;

  return (
    <Container style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#42af2c" />

      <Content style={styles.content}>
        {image && <Image style={styles.image} source={{ uri: image }} />}

        <View style={styles.dataContainer}>
          <List>
            <ListItem itemDivider style={styles.data}>
              <Text>Name: {name}</Text>
            </ListItem>
            {(type || air_date) && (
              <ListItem itemDivider style={styles.data}>
                {
                  <Text>
                    {type && `Type: ${type}`}
                    {air_date !== undefined && `Release Date: ${air_date}`}
                  </Text>
                }
              </ListItem>
            )}

            <ListItem itemDivider style={styles.data}>
              {
                <Text>
                  {gender && `Genre: ${gender}`}
                  {dimension &&
                    (dimension !== 'unknown'
                      ? dimension
                      : `Dimension ${dimension}`)}
                </Text>
              }
              {episode && <Text>Episode: {episode} </Text>}
            </ListItem>

            {species && (
              <ListItem itemDivider style={styles.data}>
                <Text>Specie: {species}</Text>
              </ListItem>
            )}
            {residents !== undefined
              ? fiveCharacters(residents)
              : characters !== undefined && fiveCharacters(characters)}
          </List>
        </View>
      </Content>
    </Container>
  );
};

export default Details;
