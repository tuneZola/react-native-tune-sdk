import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const Login = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'facebook',
      email: 'zolar@earth.com',
      name: 'Zolar',
      age: 1000,
      gender: 'MALE',
      location: {
        description: 'Seattle',
        latitude: 47.6062,
        longitude: 122.3321,
      },
    };

    try {
      TuneSDK.login(config);
      alert('Success calling login');
    } catch (e) {
      alert(`ERROR! calling login \n${e.message}`);
    }
  };

  return (
    <View style={styles.eventSection}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onPress}
          title="Test"
          color="#007AFF"
          accessibilityLabel=""
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={[styles.text, styles.title]}>{"Login"}</Text>
        </View>
        <View>
          <Text style={[styles.text]}>
            {"{}"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
