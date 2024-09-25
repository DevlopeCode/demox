/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ms, vs} from 'react-native-size-matters';

const LeaderboardCard = () => {
  const leaderboardData = [
    {
      id: 1,
      name: 'Alexander Murphy',
      score: '+18(90)',
      image: require('../assets/user1.png'),
    },
    {
      id: 2,
      name: 'Harvey Specter',
      score: '+19(91)',
      image: require('../assets/user2.png'),
    },
    {
      id: 3,
      name: 'Ted Evelyn Mosby',
      score: '+31(103)',
      image: require('../assets/user3.png'),
    },
  ];

  const RankIcon = ({rank}: any) => {
    const bgColor = rank === 1 ? '#FFD700' : rank === 2 ? '#C0C0C0' : '#CD7F32';
    return (
      <View style={[styles.rankIcon, {backgroundColor: bgColor}]}>
        <Text style={styles.rankText}>{rank}</Text>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.headerText}>Leaderboard</Text>
      </TouchableOpacity>
      {leaderboardData.map(item => (
        <View key={item.id} style={styles.row}>
          <RankIcon rank={item.id} />
          <Image source={item.image} style={styles.avatar} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>{item.score}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: ms(20),
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rankIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rankText: {
    color: 'white',
    fontWeight: 'bold',
  },
  avatar: {
    width: vs(40),
    height: vs(40),
    borderRadius: 20,
    marginRight: 12,
  },
  crownIcon: {
    position: 'absolute',
    top: -10,
    left: ms(16),
  },
  name: {
    flex: 1,
    fontSize: ms(14),
  },
  score: {
    fontSize: ms(14),
    fontWeight: 'bold',
  },
});

export default LeaderboardCard;
