import { DEFAULT_DEPRECATION_REASON } from 'graphql';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 8
    },
    buttonPrev: {
        height: '80%',
        alignSelf: 'center',
        flexGrow: 1,
        backgroundColor: '#3ed3ee',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    },
    buttonNext: {
        height: '80%',
        alignSelf: 'center',
        flexGrow: 1,
        backgroundColor: '#3ed3ee',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    buttonText: {
        textAlign: 'center',
        flexGrow: 1
    },
    picker: {
        height: '80%',
        width: '50%',
        backgroundColor: '#fff',
        padding: 10
    }
});

export default styles;