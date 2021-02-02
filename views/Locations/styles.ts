import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    error: {
        marginTop: 10,
        width: '100%',
        height: 150,
        fontSize: 40,
        backgroundColor: "#ce3333",
        textAlign: "center",
        alignSelf: "center",
        textAlignVertical: 'center'
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50%'
    }
});

export default styles;