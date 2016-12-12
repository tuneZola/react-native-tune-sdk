import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const SetCustomProfileGeolocation = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_GEOLOCATION',
      location: {
        description: 'Seattle',
        latitude: 47.6062,
        longitude: 122.3321,
      },
    };

    try {
      TuneSDK.setCustomProfileGeolocation(config);
      alert('Success calling setCustomProfileGeolocation');
    } catch (e) {
      alert(`ERROR! calling setCustomProfileGeolocation \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Set Custom Profile Geolocation"}</Text>
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

export default SetCustomProfileGeolocation;
