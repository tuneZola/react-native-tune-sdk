import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const AchievementUnlocked = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'number',
      contentId: '7453',
    };

    try {
      TuneSDK.achievementUnlocked(config);
      alert('Success calling achievementUnlocked');
    } catch (e) {
      alert(`ERROR! calling achievementUnlocked \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Achievement Unlocked"}</Text>
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

export default AchievementUnlocked;
