/* eslint-disable react-native/no-inline-styles */
import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FONTS} from '../theme/fonts';
export const Header = () => {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      resizeMode="contain"
      style={{
        height: vs(260),
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: ms(20),
            color: Colors.white,
            // fontStyle: FONTS.bold,
            fontFamily: FONTS.bold,
            fontWeight: 'bold',
            width: '85%',
            paddingHorizontal: ms(20),
          }}>
          Newton Common{'\n'}Wealth Golf Course
        </Text>
        <Image
          style={{height: vs(50), width: vs(50), right: ms(10)}}
          source={require('../assets/locationround.png')}
        />
      </View>
    </ImageBackground>
  );
};
