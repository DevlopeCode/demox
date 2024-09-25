import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ms, vs} from 'react-native-size-matters';

const ReviewCard = ({img}: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        {/* User Image */}
        <Image
          source={img} // Replace with actual image URL
          style={styles.profileImage}
        />

        <View style={styles.headerText}>
          {/* Name and Rating */}
          <View style={styles.nameRatingContainer}>
            <Text style={styles.nameText}>Harvey Specter</Text>
            <View style={styles.ratingContainer}>
              <Image
                source={require('../assets/start.png')}
                style={{
                  height: vs(15),
                  width: vs(15),
                }}
              />
              <Text style={styles.ratingText}>4.3</Text>
            </View>
          </View>

          {/* Date */}
          <Text style={styles.dateText}>Jan 12</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.descriptionText}>
        Greenview Golf Club is a premier 18-hole golf course designed to offer a
        challenging and enjoyable experience for golfers of all skill levels.
        Nestled in the rolling hills of Golf City, the course features stunning
        views, well-maintained greens, and a variety of natural hazards.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: ms(10),
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: ms(15),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameRatingContainer: {
    flexDirection: 'column',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#2D2D2D',
  },
  dateText: {
    fontSize: 14,
    color: '#6C6C6C',
  },
  descriptionText: {
    fontSize: 15,
    color: '#606060',
    lineHeight: 22,
  },
});

export default ReviewCard;
