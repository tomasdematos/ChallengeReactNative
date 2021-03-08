import React from 'react';
import { View } from 'react-native';

import { Footer, Text } from 'native-base';

import styles from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export interface Props {
  navigation: ProfileScreenNavigationProp;
}

const ViewFooter: React.FC<Props> = ({ navigation }) => {
  return (
    <Footer style={styles.footer}>
      <View style={styles.footerContainer}>
        <View style={styles.textContainer}>
          <Text
            style={styles.footerText}
            onPress={() => navigation.navigate('characters')}>
            Characters
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text
            style={styles.footerText}
            onPress={() => navigation.navigate('locations')}>
            Locations
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.textContainer}>
          <Text
            style={styles.footerText}
            onPress={() => navigation.navigate('episodes')}>
            Episodes
          </Text>
        </View>
      </View>
    </Footer>
  );
};

export default ViewFooter;
