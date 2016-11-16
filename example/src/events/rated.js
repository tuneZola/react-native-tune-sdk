import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const Rated = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'number',
      rating: 5.0,
      contentId: '7453',
    };

    try {
      MobileAppTracking.rated(config);
      alert('Success calling rated');
    } catch (e) {
      alert(`ERROR! calling rated \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Rated"}</Text>
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

export default Rated;
