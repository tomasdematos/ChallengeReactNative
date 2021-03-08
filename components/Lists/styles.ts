import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 110,
    height: 110,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#63da7d',
    height: 110,
    margin: 5,
    marginBottom: 0,
    padding: 0,
  },
  button: {
    height: '100%',
    width: '100%',
    paddingBottom: 0,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameContainer: {
    backgroundColor: '#5d9761',
    width: '50%',
    margin: 10,
    marginRight: 0,
  },
  secondContainer: {
    width: '40 %',
    borderWidth: 1,
    borderLeftWidth: 0,
    marginLeft: -2,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
  },
  text: {
    height: '100%',
    textAlignVertical: 'center',
    color: '#000',
  },
});

export default styles;
