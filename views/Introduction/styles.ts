import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Button: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#53c0db',
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 40,
    borderRadius: 100,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 28,
    color: '#000',
  },
  titleContainer: {
    backgroundColor: '#5bf582',
    marginTop: '2%',
    marginHorizontal: '2.5%',
    paddingVertical: 20,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#474646',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d6ffe4',
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    alignContent: 'center',
    marginTop: 10,
  },
  footer: {
    textAlign: 'center',
    backgroundColor: '#6ec782',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    width: '100%',
  },
});
export default styles;
