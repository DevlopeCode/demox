/* eslint-disable react-native/no-inline-styles */

import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {ms, vs} from 'react-native-size-matters';
import {Colors} from '../theme/colors';
import ReviewCard from './ratingcard';
import ReviewsAndRatings from './ratingprogress';

const Header = ({onPress}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: ms(20),
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: vs(35),
          backgroundColor: Colors.bgback,
          height: vs(35),
          borderRadius: vs(25),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: vs(20), width: vs(20)}}
          source={require('../assets/arrowLeft.png')}
        />
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: ms(15)}}>
        Ratings and Reviews
      </Text>
      <View style={{width: vs(10)}} />
    </View>
  );
};

const RatingsReviewsModal = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setModalVisible(true),
    hide: () => setModalVisible(false),
  }));

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-end',
          }}>
          <Header onPress={() => setModalVisible(false)} />
          <ReviewsAndRatings />
          <View>
            <ReviewCard img={require('../assets/user1.png')} />
            <ReviewCard img={require('../assets/user2.png')} />
            <ReviewCard img={require('../assets/user3.png')} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginVertical: vs(20),
              backgroundColor: '#FFFFFF',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E9F2EB',
                height: vs(40),
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                borderRadius: ms(20),
              }}>
              <Text style={{color: Colors.green}}>Write a review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: vs(20),
  },
});

export default RatingsReviewsModal;
