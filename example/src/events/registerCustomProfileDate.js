import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const RegisterCustomProfileDate = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_DATE',
      value: {
        day: 1,
        month: 1,
        year: 2021,
      },
    };

    try {
      MobileAppTracking.registerCustomProfileDate(config);
      alert('Success calling registerCustomProfileDate');
    } catch (e) {
      alert(`ERROR! calling registerCustomProfileDate \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Register Custom Profile Date"}</Text>
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

export default RegisterCustomProfileDate;
