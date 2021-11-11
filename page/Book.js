import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';

import Button from '../component/Button';
import Header from '../component/Header';

const Book = () => {
  const states = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
  ];

  const [f_name, setF_name] = useState('');
  const [s_name, setS_name] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddres] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const later = () => {};

  const payment = () => {};

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.parentScroll} nestedScrollEnabled={true}>
        <View>
          <SafeAreaView>
            <Text style={styles.header}>Personal Details</Text>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={f_name}
                onChangeText={e => setF_name(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                value={s_name}
                onChangeText={e => setS_name(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={e => setEmail(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                style={styles.input}
                value={phone}
                keyboardType="number-pad"
                onChangeText={e => setPhone(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Address</Text>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={e => setAddres(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={e => setCity(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>State</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Zip code</Text>
              <TextInput
                style={styles.input}
                value={zip}
                onChangeText={e => setZip(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Organization</Text>
              <TextInput
                style={styles.input}
                value={organization}
                onChangeText={e => setOrganization(e)}
              />
            </View>
            <Button text="Save for later" action={later} />
            <Button text="Make payment" action={payment} />
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  parentScroll: {flexGrow: 1},
  header: {
    fontSize: 30,
    color: 'rgba(19, 1, 97, 1)',
    textAlign: 'center',
    padding: 10,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: 10,
  },
  input: {borderWidth: 1, borderColor: 'rgba(19, 1, 97, 1)', fontSize: 20},
});

export default Book;
