import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    tinyLogo: {
        width: 110,
        height: 110,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
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
        height: '100%',
        borderRadius: 10,
        textAlignVertical: 'center',
        color: '#000',
        maxWidth: '83%'
    }
});

export default styles;