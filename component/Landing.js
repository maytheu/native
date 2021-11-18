import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Landing = () => {
  return (
    <View style={styles.landing}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="flight"
          size={40}
          color="rgb(19, 1, 97)"
          style={{paddingRight: 10}}
        />
        <Text style={styles.landingHeader}>Flight Booking</Text>
      </View>
      <Text style={styles.landingNote}>
        Phoenix proudly raises the bar and exceeds the standard for luxury and
        corporate flight charter services. We pride ourselves on offering a
        professional service.
      </Text>
      <Text style={styles.landingForm}>
        Please fill the form below to book.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  landing: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  landingHeader: {
    fontSize: 30,
    color: 'rgb(19, 1, 97)',
    paddingBottom: 20,
    fontFamily: 'Poppins-Bold',
  },
  landingNote: {
    fontSize: 15,
    paddingBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  landingForm: {fontSize: 15, fontFamily: 'Poppins-Regular'},
});

export default Landing;
