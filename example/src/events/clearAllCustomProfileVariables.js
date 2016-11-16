import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const ClearAllCustomProfileVariables = () => {
  const onPress = () => {
    try {
      MobileAppTracking.clearAllCustomProfileVariables();
      alert('Success calling clearAllCustomProfileVariables');
    } catch (e) {
      alert(`ERROR! calling clearAllCustomProfileVariables \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Clear All Custom Profile Variables"}</Text>
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

export default ClearAllCustomProfileVariables;
