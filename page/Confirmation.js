import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';

import Header from '../component/Header';
import Button from '../component/Button';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state;

  const home = () => navigate('/');

  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView style={styles.views}>
        <Text style={styles.header}>
          Flight Booking {type === 'quotas' ? 'Quote' : 'Invoice'}
        </Text>
        <View style={{marginTop: -50}}>
          <Text style={styles.text}>
            {type === 'quotas'
              ? 'Your flight quote has been successfully sent to your mail.'
              : 'Your Flight invoice has been successfully sent to your mail.'}
          </Text>
          <Text style={styles.text}>
            One of our agents will contact you shortly.
          </Text>
        </View>
        <View style={styles.bottom}>
          <Button text="Make another Booking" action={home} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  views: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 25,
    color: 'rgba(19, 1, 97, 1)',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Montserrat',
  },
  text: {
    fontSize: 18,
    paddingBottom: 50,
    textAlign: 'center',
    color: 'black',
  },
});

export default Confirmation;
