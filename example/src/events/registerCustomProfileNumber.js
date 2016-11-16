import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const RegisterCustomProfileNumber = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_NUMBER',
      value: 1,
    };

    try {
      MobileAppTracking.registerCustomProfileNumber(config);
      alert('Success calling registerCustomProfileNumber');
    } catch (e) {
      alert(`ERROR! calling registerCustomProfileNumber \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Register Custom Profile Number"}</Text>
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

export default RegisterCustomProfileNumber;
