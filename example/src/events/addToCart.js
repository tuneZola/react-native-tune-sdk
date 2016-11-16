import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import MobileAppTracking from 'react-native-tune-sdk';

import styles from './styles';

const AddToCart = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'number',
      age: 1000,
      revenue: 10.00,
      currencyCode: 'USD',
      gender: 'MALE',
      location: {
        description: 'Seattle',
        latitude: 47.6062,
        longitude: 122.3321,
      },
      eventItems: [
        {
          itemName: 'iPhone',
          unitPrice: 10,
          quantity: 10,
          revenue: 100.00,
          attribute1: 'attribute1',
          attribute2: 'attribute2',
          attribute3: 'attribute3',
          attribute4: 'attribute4',
          attribute5: 'attribute5',
        },
      ],
    };

    try {
      MobileAppTracking.addToCart(config);
      alert('Success calling addToCart');
    } catch (e) {
      alert(`ERROR! calling addToCart \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Add To Cart"}</Text>
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

export default AddToCart;
