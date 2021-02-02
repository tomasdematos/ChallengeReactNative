import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#63da7d',
        margin: 5,
        marginBottom: 0,
        padding: 0
    },
    button: {
        height: '100%',
        width: '100%',
        paddingBottom: 0,
        paddingTop: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        width: '60%',
        height: '100%',
        borderRadius: 10,
        textAlignVertical: 'center',
        color: '#000',
        maxWidth: '83%'
    }
});

export default styles;