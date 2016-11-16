import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const RegisterCustomProfileGeolocation = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_GEOLOCATION',
      value: {
        description: 'Seattle',
        latitude: 47.6062,
        longitude: 122.3321,
      },
    };

    try {
      MobileAppTracking.registerCustomProfileGeolocation(config);
      alert('Success calling registerCustomProfileGeolocation');
    } catch (e) {
      alert(`ERROR! calling registerCustomProfileGeolocation \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Registration Custom Profile Geolocation"}</Text>
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

export default RegisterCustomProfileGeolocation;
