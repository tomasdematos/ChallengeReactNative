import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { backgroundColor: '#b3f17f' },
  content: { alignContent: 'center' },
  characters: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  charactersButton: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#00920c',
    paddingLeft: 5,
    justifyContent: 'flex-start',
  },
  data: {
    backgroundColor: '#00920c',
    marginBottom: 5,
  },

  dataContainer: {
    backgroundColor: '#42af2c',
    padding: 10,
    margin: 5,
    marginTop: 0,
  },
  image: {
    margin: 5,
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  nameText: {
    marginLeft: 10,
    maxWidth: '80%',
  },
});

export default styles;
