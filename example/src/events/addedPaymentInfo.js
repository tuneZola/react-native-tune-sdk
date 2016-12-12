import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const AddedPaymentInfo = () => {
  const onPress = () => {
    const config = {
      id: '1',
      type: 'facebook',
    };

    try {
      TuneSDK.addedPaymentInfo(config);
      alert('Success calling addedPaymentInfo');
    } catch (e) {
      alert(`ERROR! calling addedPaymentInfo \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Add Payment Info"}</Text>
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

export default AddedPaymentInfo;
