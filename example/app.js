/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native';

import styles from './src/styles';
import Events from './src/events';

const tuneLogo = require('./src/images/tune.png');
const reactLogo = require('./src/images/reactnative.png');

const App = () => (
  <View style={styles.container}>
    <View style={[styles.half, styles.top]} >
      <Image
        style={styles.tune}
        source={tuneLogo}
      />
      <Text style={styles.welcome}>
        Welcome to React Native iPhone Edition!
      </Text>
      <Image
        style={styles.react}
        source={reactLogo}
      />
    </View>
    <View style={[styles.half, styles.bottom]} >
      <Events />
    </View>
  </View>
);

export default App;
