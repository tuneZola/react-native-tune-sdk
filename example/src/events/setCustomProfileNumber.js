import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const SetCustomProfileNumber = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_NUMBER',
      value: 3,
    };

    try {
      TuneSDK.setCustomProfileNumber(config);
      alert('Success calling setCustomProfileNumber');
    } catch (e) {
      alert(`ERROR! calling setCustomProfileNumber \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Set Custom Profile Number"}</Text>
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

export default SetCustomProfileNumber;
