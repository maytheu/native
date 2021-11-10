import React from 'react';
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

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.parentScroll} nestedScrollEnabled={true}>
        <View>
          <SafeAreaView>
            <Text style={styles.header}>Personal Details</Text>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>First Name</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Phone</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Address</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>City</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>State</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Zip code</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Organization</Text>
              <TextInput style={styles.input} />
            </View>
            <Button text="Save for later" />
            <Button text="Make payment" />
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
