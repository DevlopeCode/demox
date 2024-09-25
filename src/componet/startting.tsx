/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const LablelineBox = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: vs(13),
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: Colors.black,
          paddingHorizontal: ms(8),
          paddingVertical: ms(2),
          borderRadius: ms(5),
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: ms(16),
            color: Colors.white,
          }}>
          B
        </Text>
      </View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: ms(16),
          paddingLeft: ms(20),
          color: Colors.black100,
        }}>
        Black (6707 m)
      </Text>
    </View>

    <Image
      resizeMode="contain"
      source={require('../assets/right.png')}
      style={{height: vs(13), width: vs(13)}}
    />
  </View>
);

export const StartingCard = () => (
  <View style={{padding: 10, flex: 1}}>
    <View
      style={{
        height: vs(80),
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: ms(10),
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: ms(16)}}>Starting Tee</Text>
      <LablelineBox />
    </View>
  </View>
);
