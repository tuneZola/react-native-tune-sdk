import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const SetCustomProfileDate = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_DATE',
      value: {
        day: 1,
        month: 2,
        year: 2023,
      },
    };

    try {
      MobileAppTracking.setCustomProfileDate(config);
      alert('Success calling setCustomProfileDate');
    } catch (e) {
      alert(`ERROR! calling setCustomProfileDate \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Set Custom Profile Date"}</Text>
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

export default SetCustomProfileDate;
