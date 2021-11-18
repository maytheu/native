import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigate} from 'react-router-native';

import Header from '../component/Header';

const Home = () => {
  const navigation = useNavigate();
  const submit = () => {
    navigation('/flight');
  };
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Image
          source={require('../assets/heli.jpg')}
          style={{height: 350, width: 300, borderRadius: 50}}
        />
        <View style={styles.caption}>
          <Text style={styles.mainText}>Private Jet Charter</Text>
          <Text style={styles.subText}>
            Our private jet services offer you safety, speed, comfort and
            discretion on contract or on spot basis.
          </Text>
          <View style={styles.bookView}>
            <TouchableOpacity onPress={submit}>
              <LinearGradient
                colors={['rgb(19, 1, 97)', 'rgb(12,0,176)']}
                style={styles.btn}>
                <Text style={styles.btnText}>book now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Image
          source={require('../assets/heli.jpg')}
          style={{height: 350, width: 300, borderRadius: 50}}
        />
        <View style={styles.caption}>
          <Text style={styles.mainText}>Helicopter Services</Text>
          <Text style={styles.subText}>
            Our private jet services offer you safety, speed, comfort and
            discretion on contract or on spot basis.
          </Text>
          <View style={styles.bookView}>
            <TouchableOpacity onPress={submit}>
              <LinearGradient
                colors={['rgb(19, 1, 97)', 'rgb(12,0,176)']}
                style={styles.btn}>
                <Text style={styles.btnText}>book now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Image
          source={require('../assets/heli.jpg')}
          style={{height: 350, width: 300, borderRadius: 50}}
        />
        <View style={styles.caption}>
          <Text style={styles.mainText}>Medical Evacuation</Text>
          <Text style={styles.subText}>
            Our private jet services offer you safety, speed, comfort and
            discretion on contract or on spot basis.
          </Text>
          <View style={styles.bookView}>
            <TouchableOpacity onPress={submit}>
              <LinearGradient
                colors={['rgb(19, 1, 97)', 'rgb(12,0,176)']}
                style={styles.btn}>
                <Text style={styles.btnText}>book now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <Image
          source={require('../assets/heli.jpg')}
          style={{height: 350, width: 300, borderRadius: 50}}
        />
        <View style={styles.caption}>
          <Text style={styles.mainText}>Travels & Tours</Text>
          <Text style={styles.subText}>
            Our private jet services offer you safety, speed, comfort and
            discretion on contract or on spot basis.
          </Text>
          <View style={styles.bookView}>
            <TouchableOpacity onPress={submit}>
              <LinearGradient
                colors={['rgb(19, 1, 97)', 'rgb(12,0,176)']}
                style={styles.btn}>
                <Text style={styles.btnText}>book now</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  main: {alignItems: 'center', borderRadius: 10, marginTop: 25},
  caption: {position: 'relative', marginTop: -180},
  mainText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    width: 300,
  },
  bookView: {justifyContent: 'center', alignSelf: 'center', marginTop: 10},
  btn: {
    backgroundColor: 'rgba(19, 1, 97, 1)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 5,
    alignItems: 'center',
    marginLeft: 13,
    marginRight: 13,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 4.65,
    elevation: 2,
    shadowOpacity: 0.2,
  },
  btnText: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});

export default Home;
