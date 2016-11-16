import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const LevelAchieved = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'number',
      level: 73,
    };

    try {
      MobileAppTracking.levelAchieved(config);
      alert('Success calling levelAchieved');
    } catch (e) {
      alert(`ERROR! calling levelAchieved \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Level Achieved"}</Text>
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

export default LevelAchieved;
