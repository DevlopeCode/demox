/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import {View, Text, Image} from 'react-native';
import React from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Startingfrom = () => {
  const LablelineBox = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: vs(13),
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: ms(16),
            // paddingLeft: ms(20),
            color: Colors.black100,
          }}>
          Starting from
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: ms(16),
            color: Colors.black100,
            paddingRight: ms(10),
          }}>
          Hole 2
        </Text>
        <Image
          resizeMode="contain"
          source={require('../assets/pencil.png')}
          style={{height: vs(13), width: vs(13)}}
        />
      </View>
    </View>
  );
  return (
    <View style={{padding: 10, flex: 1}}>
      <View
        style={{
          height: vs(60),
          backgroundColor: Colors.white,
          borderRadius: 20,
          padding: ms(10),
          justifyContent: 'space-between',
        }}>
        <LablelineBox />
      </View>
    </View>
  );
};
