import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Landing = () => {
  return (
    <View style={styles.landing}>
      <Text style={styles.landingHeader}>Flight Booking</Text>
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
  landing: {padding: 10, alignItems: 'center'},
  landingHeader: {
    fontSize: 30,
    fontWeight: '600',
    color: 'rgba(13, 13, 14, 1)',
    paddingBottom: 20,
  },
  landingNote: {fontSize: 18, paddingBottom: 20},
  landingForm: {fontSize: 18},
});

export default Landing;
