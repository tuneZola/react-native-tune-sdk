import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const SetCustomProfileStringValue = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_STRING_TEXT',
      value: 'Zolar Updated by Set Customer',
    };

    try {
      MobileAppTracking.setCustomProfileStringValue(config);
      alert('Success calling setCustomProfileStringValue');
    } catch (e) {
      alert(`ERROR! calling setCustomProfileStringValue \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Set Custom Profile String Value"}</Text>
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

export default SetCustomProfileStringValue;
