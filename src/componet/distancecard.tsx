/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const LebleBox = ({title1, title2}: {title1: string; title2: string}) => (
  <View style={{height: vs(40), justifyContent: 'space-between'}}>
    <Text style={{fontWeight: '400', fontSize: ms(12), color: Colors.gray50}}>
      {title1}
    </Text>
    <Text style={{fontWeight: 'bold', fontSize: ms(16)}}>{title2}</Text>
  </View>
);

export const DistanceCard = () => {
  return (
    <View style={{padding: 10, flex: 1}}>
      <View
        style={{
          // height: vs(120),
          backgroundColor: Colors.white,
          borderRadius: 20,
          padding: ms(10),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: ms(10),
              paddingVertical: ms(5),
            }}>
            <Image
              resizeMode="contain"
              style={{height: vs(10), width: vs(10)}}
              source={require('../assets/location.png')}
            />
            <Text style={{paddingLeft: ms(10), fontWeight: '400'}}>
              California Palms, USA
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.yellowshadow,
              paddingHorizontal: ms(10),
              paddingVertical: ms(5),
              borderRadius: ms(20),
            }}>
            <Image
              resizeMode="contain"
              style={{height: vs(10), width: vs(10)}}
              source={require('../assets/start.png')}
            />
            <Text style={{paddingLeft: ms(10), fontWeight: '600'}}>4.3</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: ms(10),
            paddingVertical: ms(5),
          }}>
          <Image
            resizeMode="contain"
            style={{height: vs(10), width: vs(10)}}
            source={require('../assets/map.png')}
          />
          <Text style={{paddingLeft: ms(10), fontWeight: '400'}}>
            9 km away
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: ms(10),
            paddingVertical: ms(5),
            justifyContent: 'space-between',
            paddingTop: vs(20),
          }}>
          <LebleBox title1="Length" title2="7017 Yds" />
          <LebleBox title1="Rating/Slope" title2="72.0/129" />
          <LebleBox title1="Scorecard" title2="18 Holes" />
        </View>
      </View>
    </View>
  );
};
