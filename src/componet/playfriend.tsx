/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const PlayFriend = () => {
  const [btn, setbtn] = useState(true);
  const handleToggleSwitch = () => setbtn(previousState => !previousState);

  const LablelineBox = ({title1, title2, last}: any) => (
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
          Play with Friends
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Switch
          trackColor={{false: '#767577', true: Colors.gray10}}
          thumbColor={btn ? '#767577' : '#767577'}
          onValueChange={handleToggleSwitch}
          value={btn}
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
        <LablelineBox title1="Play with Friends" />
      </View>
    </View>
  );
};
