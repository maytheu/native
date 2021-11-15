import axios from 'axios';
import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Button from '../component/Button';
import Header from '../component/Header';

const API_URL = 'https://book.myphoenixng.com/api/';

const Book = () => {
  const [states, setStates] = useState([
    {label: 'Abia', value: 'Abia'},
    {label: 'Adamawa', value: 'Adamawa'},
    {label: 'Akwa Ibom', value: 'Akwa Ibom'},
    {label: 'Anambra', value: 'Anambra'},
    {label: 'Bauchi', value: 'Bauchi'},
    {label: 'Bayelsa', value: 'Bayelsa'},
    {label: 'Benue', value: 'Benue'},
    {label: 'Borno', value: 'Borno'},
    {label: 'Cross River', value: 'Cross River'},
    {label: 'Delta', value: 'Delta'},
    {label: 'Ebonyi', value: 'Ebonyi'},
    {label: 'Edo', value: 'Edo'},
    {label: 'Ekiti', value: 'Ekiti'},
    {label: 'Enugu', value: 'Enugu'},
    {label: 'Gombe', value: 'Gombe'},
    {label: 'Imo', value: 'Imo'},
    {label: 'Jigawa', value: 'Jigawa'},
    {label: 'Kaduna', value: 'Kaduna'},
    {label: 'Kano', value: 'Kano'},
    {label: 'Katsina', value: 'Katsina'},
    {label: 'Kebbi', value: 'Kebbi'},
    {label: 'Kogi', value: 'Kogi'},
    {label: 'Kwara', value: 'Kwara'},
    {label: 'Lagos', value: 'Lagos'},
    {label: 'Nasarawa', value: 'Nasarawa'},
    {label: 'Niger', value: 'Niger'},
    {label: 'Ogun', value: 'Ogun'},
    {label: 'Ondo', value: 'Ondo'},
    {label: 'Osun', value: 'Osun'},
    {label: 'Oyo', value: 'Oyo'},
    {label: 'Plateau', value: 'Plateau'},
    {label: 'Rivers', value: 'Rivers'},
    {label: 'Sokoto', value: 'Sokoto'},
    {label: 'Taraba', value: 'Taraba'},
    {label: 'Yobe', value: 'Yobe'},
    {label: 'Zamfara', value: 'Zamfara'},
  ]);
  const [first_name, setF_name] = useState('');
  const [last_name, setS_name] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddres] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;

  const user = {
    first_name,
    last_name,
    email,
    address,
    phone,
    organization,
    city,
    zip,
    state: value,
  };

  const later = () => {
    setLoading(true);
    if (
      !last_name ||
      !first_name ||
      !email ||
      !address ||
      !phone ||
      !organization
    ) {
      Alert.alert('Form Error', 'Field marked * are compulsory', [
        {text: 'ok'},
      ]);
      setLoading(false);
    } else {
      axios
        .post(`${API_URL}user/quotas`, {user, details})
        .then(res => {
          setLoading(false);
          navigate('/confirmation', {state: 'quotas'});
        })
        .catch(() => {
          setLoading(false);
          Alert.alert('Error', 'Error processing data', [{text: 'ok'}]);
        });
    }
  };


  const payment = () => {
    if (
      !last_name ||
      !first_name ||
      !email ||
      !address ||
      !phone ||
      !organization
    ) {
      Alert.alert('Form Error', 'Field marked * are compulsory', [
        {text: 'ok'},
      ]);
    }
    const data = {user, details};
    navigate('/payment', {state: data});
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.parentScroll} nestedScrollEnabled={true}>
        <View>
          <SafeAreaView>
            <Text style={styles.header}>Personal Details</Text>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>
                First Name <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={first_name}
                onChangeText={e => setF_name(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>
                Last Name <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={last_name}
                onChangeText={e => setS_name(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>
                Email <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={email}
                keyboardType="email-address"
                onChangeText={e => setEmail(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>
                Phone <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={phone}
                keyboardType="number-pad"
                onChangeText={e => setPhone(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>
                Address <Text style={{color: 'red'}}>*</Text>
              </Text>
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
              <DropDownPicker
                open={open}
                value={value}
                items={states}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setStates}
                placeholder="Select your state"
                scrollViewProps={{
                  decelerationRate: 'fast',
                }}
                listMode="SCROLLVIEW"
                style={{borderRadius: 0}}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>Zip code</Text>
              <TextInput
                style={styles.input}
                value={zip}
                keyboardType="number-pad"
                onChangeText={e => setZip(e)}
              />
            </View>
            <View style={{paddingBottom: 10}}>
              <Text style={styles.label}>
                Organization <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={organization}
                onChangeText={e => setOrganization(e)}
              />
            </View>
            {loading ? (
              <ActivityIndicator size="large" color="rgba(19, 1, 97, 1)" />
            ) : (
              <Button text="Save for later" action={later} />
            )}
            <Button
              text={`pay Ngn${details.reduce(
                (a, b) => a + (b.exchange || 0),
                0,
              )}`}
              action={payment}
            />
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
    paddingLeft: 5,
  },
  input: {borderWidth: 1, borderColor: 'rgba(19, 1, 97, 1)', fontSize: 20},
});

export default Book;
