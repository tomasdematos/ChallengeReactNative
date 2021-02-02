import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#8fc983',
        height: 40,

    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        paddingHorizontal: '1%',
        borderTopWidth: 1,

    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    textContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },

    divider: {
        borderLeftWidth: 1,
        height: '100%',
        borderLeftColor: '#000',
        marginHorizontal: '2%'
    }

});

export default styles