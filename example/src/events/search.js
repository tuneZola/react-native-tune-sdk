import React from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import TuneSDK from 'react-native-tune-sdk';

import styles from './styles';

const Search = () => {
  const onPress = () => {
    const config = {
      id: '1',
      userIdType: 'number',
      quantity: 100.00,
      searchString: 'Look for something',
      currencyCode: 'USD',
      location: {
        description: 'Seattle',
        latitude: 47.6062,
        longitude: 122.3321,
      },
      data1: {
        day: 1,
        month: 1,
        year: 2017,
      },
      data2: {
        day: 2,
        month: 2,
        year: 2017,
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
      TuneSDK.search(config);
      alert('Success calling search');
    } catch (e) {
      alert(`ERROR! calling search \n${e.message}`);
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
          <Text style={[styles.text, styles.title]}>{"Search"}</Text>
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

export default Search;
