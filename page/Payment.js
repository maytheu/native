import React from 'react';
import {useLocation, useNavigate} from 'react-router-native';
import {Alert, View} from 'react-native';

import axios from 'axios';
import {Paystack} from 'react-native-paystack-webview';

const API_URL = 'https://book.myphoenixng.com/api/';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  return (
    <View style={{flex: 1}}>
      <Paystack
        paystackKey="pk_test_6b51d85e93fa26b138e803daef498a466a01e234"
        amount={state.details.reduce((a, b) => a + (b.exchange || 0), 0)}
        billingEmail={state.user.email}
        activityIndicatorColor="rgba(19, 1, 97, 1)"
        onCancel={e => {
          navigate('/book', {state: state.details});
        }}
        onSuccess={res => {
          axios
            .post(`${API_URL}user/payment`, {
              user: state.user,
              details: state.details,
              reference: res.data.transactionRef,
            })
            .then(() => navigate('/confirmation', {state: 'invoice'}))
            .catch(() =>
              Alert.alert('Error', 'Error processing data', [{text: 'ok'}]),
            );
        }}
        autoStart={true}
      />
    </View>
  );
};

export default Payment;
