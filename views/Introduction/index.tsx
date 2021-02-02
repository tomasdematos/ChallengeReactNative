import React from 'react';
import { View, Image } from 'react-native'
import { Container, Content, Footer, Button, Text, } from 'native-base';

import styles from './styles';


var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();

export interface IntroductionProps {
    navigation: any
}

const Introduction: React.SFC<IntroductionProps> = ({ navigation }) => {
    return (

        <Container style={styles.container}>
            <Content>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        React Native Challenge
                    </Text>
                    <Text style={styles.title}>
                        Rick & Morty the Poor Wiki
                        </Text>
                    <Text style={styles.subtitle}>
                        Tomás de Matos
                    </Text>
                </View>
                <View style={{ alignContent: 'center', marginTop: 10 }}>
                    <Image
                        style={styles.image}
                        source={require('./logo.png')}
                    />
                </View>
                <View style={{ alignContent: 'center' }}>
                    <Button style={styles.Button}
                        onPress={() => navigation.navigate('characters')}>
                        <Text style={{ fontSize: 28, color: '#000' }}>Enter</Text>
                    </Button>
                </View>

            </Content>
            <Footer >
                <Text style={styles.footer}>
                    {date} / {month} / {year}
                </Text>
            </Footer>

        </Container >
    );
}

export default Introduction;