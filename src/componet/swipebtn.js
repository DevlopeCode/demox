/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import React, {useCallback} from 'react';
import SlideButton from 'rn-slide-button';
import {ms, vs} from 'react-native-size-matters';
const Swipebtn = ({onPress}) => {
  const handleSlideSuccess = useCallback(() => {
    onPress();
  }, []);

  return (
    <View style={styles.container}>
      <SlideButton
        reverseSlideEnabled
        animation={true}
        width={ms(300)} // Width of the button as per the image
        height={vs(40)} // Height of the button as per the image
        borderRadius={28} // Rounded corners like in the image
        onReachedToEnd={handleSlideSuccess} // Callback when slide succeeds
        slideDirection="right"
        containerStyle={styles.buttonContainer}
        underlayStyle={styles.saveButtonUnderlay}
        completeThresholdPercentage={70} // The swipe threshold for success
        thumbIcon={
          <Image
            source={require('../assets/golfball.png')} // Replace with your actual image path
            style={styles.thumbIcon}
          />
        }>
        <View style={styles.innerContent}>
          <Text style={styles.buttonText}>Start Round</Text>
          <Image
            source={require('../assets/golfball.png')} // Replace with your arrow image
            style={styles.arrowIcon}
          />
        </View>
      </SlideButton>
    </View>
  );
};

export default Swipebtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    backgroundColor: '#277A37', // Green background color
    borderColor: '#277A37', // Green border color
    borderWidth: 1,
  },
  saveButtonUnderlay: {
    backgroundColor: '#277A37',
  },
  thumbIcon: {
    width: 50, // Adjust according to the golf ball size
    height: 50,
    borderRadius: 25, // Make it round
  },
  innerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ensure the content fills the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10, // Spacing between text and arrow
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});
