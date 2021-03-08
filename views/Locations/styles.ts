import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: '#d6ffff' },
  content: { alignContent: 'center' },
  error: {
    marginTop: 10,
    width: '100%',
    height: 150,
    fontSize: 40,
    backgroundColor: '#ce3333',
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50%',
  },
  list: { marginBottom: 4 },
});

export default styles;
