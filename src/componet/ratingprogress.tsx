/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {vs, ms} from 'react-native-size-matters';
import {Colors} from '../theme/colors';
// import {Star, ChevronRight} from 'lucide-react';

const ReviewsAndRatings = ({rating, reviewCount}: any) => {
  const fullStars = 3;
  const hasHalfStar = rating % 1 !== 0;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reviews and Ratings</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingNumber}>4.3</Text>
          <View>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, index) => (
                <Image
                  source={require('../assets/start.png')}
                  style={{
                    tintColor:
                      index < fullStars
                        ? '#FFD700'
                        : index === fullStars && hasHalfStar
                        ? '#FFD700'
                        : '#E0E0E0',
                    height: vs(15),
                    width: vs(15),
                  }}
                />
              ))}
            </View>
            <Text style={styles.reviewCount}>
              Based on {reviewCount} rating{reviewCount !== 1 ? 's' : ''}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: vs(100),
            justifyContent: 'space-between',
            marginTop: ms(20),
          }}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '400', fontSize: ms(15)}}>Value</Text>
              <Text style={{fontWeight: '700', fontSize: ms(15)}}>3.7</Text>
            </View>
            <View
              style={{
                height: vs(5),
                backgroundColor: Colors.gray10,
                width: '100%',
                marginVertical: ms(3),
                borderRadius: ms(10),
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '400', fontSize: ms(15)}}>
                Condition
              </Text>
              <Text style={{fontWeight: '700', fontSize: ms(15)}}>4.7</Text>
            </View>
            <View
              style={{
                height: vs(5),
                backgroundColor: Colors.gray10,
                width: '100%',
                marginVertical: ms(3),
                borderRadius: ms(10),
              }}
            />
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '400', fontSize: ms(15)}}>
                Difficulty
              </Text>
              <Text style={{fontWeight: '700', fontSize: ms(15)}}>4.2</Text>
            </View>
            <View
              style={{
                height: vs(5),
                backgroundColor: Colors.gray10,
                width: '100%',
                marginVertical: ms(3),
                borderRadius: ms(10),
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: ms(15),
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 12,
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 12,
  },
  reviewCount: {
    fontSize: ms(14),
    color: '#666',
  },
});

export default ReviewsAndRatings;
