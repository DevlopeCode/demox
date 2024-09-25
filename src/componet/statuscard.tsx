/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Lableline = ({title1, title2, last}: any) => (
  <View
    style={{
      flexDirection: 'row',

      borderBottomWidth: !last ? 0.2 : 0,
      borderColor: Colors.gray,
      justifyContent: 'space-between',
      paddingVertical: vs(13),
    }}>
    <Text style={{fontWeight: '500', fontSize: ms(16)}}>{title1}</Text>
    <Text
      style={{
        fontWeight: '900',
        fontSize: ms(16),
        paddingLeft: ms(20),
        color: Colors.black100,
      }}>
      {title2}
    </Text>
  </View>
);

export const StatusCard = () => (
  <View style={{padding: 10, flex: 1}}>
    <View
      style={{
        // height: vs(110),
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: ms(10),
      }}>
      <Lableline title1="Handicap" title2="6.0" />
      <Lableline title1="Playing Handicap" title2="7" />
      <Lableline title1="Handicap Percentage" title2="100%" last={true} />
    </View>
  </View>
);
