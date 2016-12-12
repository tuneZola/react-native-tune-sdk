import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const SpentCredits = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'number',
      credits: 3,
    };

    TuneSDK.spentCredits(config);

    try {
      TuneSDK.spentCredits(config);
      alert('Success calling spentCredits');
    } catch (e) {
      alert(`ERROR! calling spentCredits \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Spent Credits"}</Text>
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

export default SpentCredits;
