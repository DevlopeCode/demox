/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {ms, vs} from 'react-native-size-matters';
import {Colors} from './src/theme/colors';
import Swipebtn from './src/componet/swipebtn';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Header} from './src/componet/header';
import {DistanceCard} from './src/componet/distancecard';
import {AboutCard} from './src/componet/aboutcard';
import {StatusCard} from './src/componet/statuscard';
import {Startingfrom} from './src/componet/startingfrom';
import {PlayFriend} from './src/componet/playfriend';
import {StartingCard} from './src/componet/startting';
import ReviewCard from './src/componet/ratingcard';
import LeaderboardCard from './src/componet/leaderboard';
import ReviewsAndRatings from './src/componet/rating';
import RatingsReviewsModal from './src/componet/modal';

const Ledarboard = () => {
  return (
    <View
      style={{
        height: vs(210),
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: ms(20),
      }}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: ms(16)}}>Leaderboard</Text>
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
    </View>
  );
};

const App = () => {
  const modalRef = useRef<any>(null);

  const openModal = () => {
    modalRef.current?.show();
  };
  return (
    <GestureHandlerRootView>
      <ScrollView style={{flex: 1, backgroundColor: Colors.whitebg}}>
        <StatusBar
          translucent={true}
          showHideTransition={'none'}
          barStyle={'light-content'}
        />
        <Header />
        <DistanceCard />
        <StartingCard />
        <Startingfrom />
        <PlayFriend />
        <StatusCard />
        <AboutCard />
        <LeaderboardCard />
        <ReviewsAndRatings />
        <Swipebtn onPress={openModal} />
      </ScrollView>
      <RatingsReviewsModal ref={modalRef} />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
