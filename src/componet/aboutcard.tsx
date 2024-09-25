/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const AboutCard = () => (
  <View style={{padding: 10, flex: 1}}>
    <View
      style={{
        // height: vs(210),
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: ms(20),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: ms(16)}}>About Course</Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: ms(12),
            color: Colors.gray60,
            lineHeight: ms(16.8),
            marginTop: ms(20),
          }}>
          Greenview Golf Club is a premier 18-hole golf course designed to offer
          a challenging and enjoyable experience for golfers of all skill
          levels. Nestled in the rolling hills of Golf City, the course features
          stunning views, well-maintained greens, and a variety of natural
          hazards.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 0.2,
          borderBottomWidth: 0.2,
          borderColor: Colors.gray,
          justifyContent: 'space-between',
          paddingVertical: vs(13),
          marginTop: ms(15),
        }}>
        <Text style={{fontWeight: '500', fontSize: ms(16)}}>Directions</Text>
        <Image
          resizeMode="contain"
          source={require('../assets/right.png')}
          style={{height: vs(13), width: vs(13)}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: vs(13),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '500', fontSize: ms(16)}}>Call</Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: ms(16),
              paddingLeft: ms(20),
              color: Colors.gray50,
            }}>
            +18 120 1223 132
          </Text>
        </View>

        <Image
          resizeMode="contain"
          source={require('../assets/right.png')}
          style={{height: vs(13), width: vs(13)}}
        />
      </View>
    </View>
  </View>
);
