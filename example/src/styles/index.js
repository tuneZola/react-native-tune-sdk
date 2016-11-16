import {
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color : '#f1f1f1',
    flex : 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  half : {
    flex: 1,
  },
  top : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom : {
    flex: 2,
    width,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    borderBottomColor : 'pink'
  },
  tune : {
    width : 240,
    height : 60,
    marginTop : 50,
  },
  react : {
    width : 90 * .5,
    height: 80 * .5,
  }
});
