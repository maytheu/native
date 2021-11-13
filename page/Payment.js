import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-native';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import Header from '../component/Header';
import Button from '../component/Button';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;

  const [card, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');

  const onMonth = text => {
    if (text > 0 && text <= 12) {
      setMonth(text);
    } else {
      setMonth('01');
    }
  };

  const paymentDetails = {card, month, year, cvv};

  const payment = () => {
    if (!card || !month || !year || !cvv) {
      Alert.alert('Payment Details', 'Incomplete payment card', [{text: 'ok'}]);
    }
    //request server
    navigate('/confirmation', {state: 'invoice'});
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Make payment with card</Text>
      <SafeAreaView style={styles.views}>
        <View>
        <View>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            value={card}
            keyboardType="number-pad"
            onChangeText={e => setCard(e)}
          />
        </View>
        <View>
          <Text style={styles.label}>Card Expiry</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholder="MM"
              value={month}
              keyboardType="number-pad"
              onChangeText={onMonth}
              maxLength={2}
            />
            <Text style={{fontSize: 25}}> / </Text>
            <TextInput
              style={styles.input}
              placeholder="YY"
              value={year}
              keyboardType="number-pad"
              onChangeText={e => setYear(e)}
              maxLength={2}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            value={cvv}
            keyboardType="number-pad"
            onChangeText={e => setCvv(e)}
            maxLength={3}
          />
        </View>
        </View>
        <Button text={`Pay`} action={payment} />
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
  },  header: {
    fontSize: 25,
    color: 'rgba(19, 1, 97, 1)',
    textAlign: 'center',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: 10,
    paddingLeft: 5,
  },
  input: {borderWidth: 1, borderColor: 'rgba(19, 1, 97, 1)', fontSize: 20},
});

export default Payment;
