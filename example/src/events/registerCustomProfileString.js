import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const RegisterCustomProfileString = () => {
  const onPress = () => {
    const config = {
      name: 'CUSTOM_STRING_TEXT',
      value: 'Zolar',
    };

    try {
      MobileAppTracking.registerCustomProfileString(config);
      alert('Success calling registerCustomProfileString');
    } catch (e) {
      alert(`ERROR! calling registerCustomProfileString \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Register Custom Profile String"}</Text>
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

export default RegisterCustomProfileString;
