import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

import Button from './component/Button';
import Header from './component/Header';
import Landing from './component/Landing';

const App = () => {
  const [form, setForm] = useState([
    {departure: '', arrival: '', date: '', passenger: '2'},
  ]);
  const [startDate, setStartDate] = useState(new Date());
  const [requirement, setRequirement] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [index, setIndex] = useState(null);
  // const [passAlert, setPas]

  const showRequirement = () => setRequirement(!requirement);

  const newForm = () => {
    setForm([...form, {arrival: '', departure: '', date: '', passenger: 2}]);
  };

  const onCancel = i => {
    const spreadForm = [...form];
    spreadForm.splice(i, 1);
    setForm(spreadForm);
  };

  const showDate = () => setShowTime(true);

  const onChangeValue = (i, val, id) => {
    const data = [...form];
    setIndex(i);
    data[i][id] = val;
    if (id === 'departure') {
      //query server
      console.log(val);
    }

    if (id === 'arrival') {
      //query server
      console.log(val);
    }
    4;
    if (id === 'passenger') {
      //validate passenger input
      if (val.length === 1 && val < 2) {
        data[i][id] = 2;
      }
      console.log(val.length, 'pass');
    }

    setForm(data);
  };

  console.log(index);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.parentScroll} nestedScrollEnabled={true}>
        <Landing />
        <View>
          <SafeAreaView>
            <ScrollView>
              {form.map((data, i) => (
                <View key={i}>
                  <Text style={styles.label}>from</Text>
                  <View style={styles.dropdown}>
                    <TextInput
                      placeholder="Departure Airport"
                      style={styles.drop}
                      value={data.departure}
                      onChangeText={e => onChangeValue(i, e, 'departure')}
                    />
                    <View style={styles.arrow}>
                      <Icon name="remove" size={25} style={{paddingRight: 5}} />
                      <Icon name="chevron-down" size={25} />
                    </View>
                  </View>
                  <Text style={styles.label}>to</Text>
                  <View style={styles.dropdown}>
                    <TextInput
                      placeholder="Arrival Airport"
                      style={styles.drop}
                      value={data.arrival}
                      onChangeText={e => onChangeValue(i, e, 'arrival')}
                    />
                    <View style={styles.arrow}>
                      <Icon name="remove" size={25} style={{paddingRight: 5}} />
                      <Icon name="chevron-down" size={25} />
                    </View>
                  </View>
                  <View style={styles.datePass}>
                    <View style={styles.dateView}>
                      <Text style={styles.label}>date</Text>
                      <TouchableOpacity onPress={() => showDate()}>
                        <TextInput
                          placeholder="Select date & time"
                          style={styles.input}
                          editable={false}
                        />
                      </TouchableOpacity>
                      {showTime && (
                        <DateTimePicker
                          value={startDate}
                          display="spinner"
                          minimumDate={startDate}
                        />
                      )}
                    </View>
                    <View style={styles.passengerView}>
                      <Text style={styles.label}>passengers</Text>
                      <TextInput
                        onChangeText={e => onChangeValue(i, e, 'passenger')}
                        keyboardType="number-pad"
                        style={styles.input}
                        value={data.passenger}
                      />
                    </View>
                  </View>
                  {i > 0 && (
                    <TouchableOpacity onPress={() => onCancel(i)}>
                      <Icon
                        name="remove"
                        size={30}
                        color="rgba(19, 1, 97, 1)"
                        style={styles.remove}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
        {requirement && (
          <TextInput
            placeholder="requirement"
            multiline
            numberOfLines={4}
            style={styles.input}
          />
        )}
        <Button text="add return ticket" img="undo" action={newForm} />
        <Button text="add requirement" img="star" action={showRequirement} />
        <Button text="book now" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  parentScroll: {flexGrow: 1},
  label: {
    textTransform: 'uppercase',
    // paddingLeft: 10,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  dropdown: {flex: 1, flexDirection: 'row'},
  drop: {
    borderWidth: 1,
    borderColor: 'rgba(19, 1, 97, 1)',
    borderRightWidth: 0,
    fontSize: 20,
    flex: 2,
  },
  arrow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(19, 1, 97, 1)',
    borderLeftWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {borderWidth: 1, borderColor: 'rgba(19, 1, 97, 1)', fontSize: 20},
  datePass: {flex: 1, flexDirection: 'row', marginBottom: 10},
  dateView: {flex: 2},
  passengerView: {paddingLeft: 20, flex: 1},
  remove: {flex: 1, alignSelf: 'center'},
});

export default App;
