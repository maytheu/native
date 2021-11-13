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
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

import Button from '../component/Button';
import Landing from '../component/Landing';
import Header from '../component/Header';
import {Link, useNavigate} from 'react-router-native';

const API_URL = 'https://book.myphoenixng.com/api/';

const Home = () => {
  const [form, setForm] = useState([
    {
      departure: '',
      arrival: '',
      date: new Date(),
      dates: '',
      passenger: '2',
      departureInput: '',
      arrivalInput: '',
    },
  ]);
  const [startDate, setStartDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [dates, setDate] = useState('');
  const [requirement, setRequirement] = useState(false);
  const [requirementText, setRequirementText] = useState('');
  const [showTime, setShowTime] = useState(false);
  const [index, setIndex] = useState(null);
  const [arrivalAirport, setArrivalAirport] = useState([]);
  const [departureAirport, setDepartureAirport] = useState([]);
  const [departureLoading, setDepartureLoading] = useState(false);
  const [arrivalLoading, setArrivalLoading] = useState(false);
  const [departureRessult, setDepartureResult] = useState(false);
  const [arrivalResult, setArrivalResult] = useState(false);
  const [toggleDeparture, setToggleDeparture] = useState(false);
  const [toggleArrival, setToggleArrival] = useState(false);
  const [loading, setLoading] = useState(false);

  const showRequirement = () => setRequirement(!requirement);

  const newForm = () => {
    setForm([
      ...form,
      {
        arrival: '',
        departure: '',
        dates: '',
        date: new Date(),
        passenger: '2',
        departureInput: '',
        arrivalInput: '',
      },
    ]);
  };

  let navigation = useNavigate();

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
    if (id === 'departureInput') {
      setDepartureResult(true);
      setToggleDeparture(true);
      setDepartureLoading(true);
      if (val.length >= 3) {
        axios
          .get(`${API_URL}user/airport?value=${val}`)
          .then(res => {
            setDepartureAirport(res.data.airports);
            setDepartureLoading(false);
          })
          .catch(e => {
            setDepartureLoading(false);
          });
      }
    }

    if (id === 'arrivalInput') {
      setArrivalResult(true);
      setToggleArrival(true); //toggle state
      setArrivalLoading(true);
      if (val.length >= 3) {
        axios
          .get(`${API_URL}user/airport?value=${val}`)
          .then(res => {
            setArrivalAirport(res.data.airports);
            setArrivalLoading(false);
          })
          .catch(e => {
            setArrivalLoading(false);
          });
      }
    }
    4;
    if (id === 'passenger') {
      //validate passenger input
      if (val.length === 1 && val < 2) {
        data[i][id] = '2';
      }
    }
    setForm(data);
  };

  const changeDate = (i, selectedDate) => {
    const data = [...form];
    setShowTime(Platform.OS === 'ios');
    if (mode === 'date') {
      const currentDate = selectedDate;
      setDate(currentDate);
      setMode('time');
      setShowTime(Platform.OS === 'ios');
    } else {
      const currentDate = selectedDate;
      const inputDate = `${dates.getFullYear()}/${
        dates.getMonth() + 1
      }/${dates.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
      data[index]['dates'] = inputDate;
      data[index]['date'] = new Date(inputDate);
      setForm(data);
      setMode('date');
    }
  };

  const clearText = (i, id) => {
    const data = [...form];
    data[i][id] = '';
    if (id === 'departure') {
      setDepartureResult(false);
      setToggleDeparture(false);
    } else {
      setArrivalResult(false);
      setToggleArrival(false);
    }
    setForm(data);
  };

  const onToggle = (i, id) => {
    setIndex(i);
    if (id === 'departure') {
      setToggleDeparture(!toggleDeparture);
      if (!toggleDeparture) {
        setDepartureResult(true);
        if (departureAirport.length > 0) {
          setDepartureLoading(false);
        } else {
          setDepartureLoading(true);
        }
      } else {
        setDepartureLoading(false);
        setDepartureResult(false);
      }
    }
    if (id === 'arrival') {
      setToggleArrival(!toggleArrival);
      if (!toggleArrival) {
        setArrivalResult(true);
        if (arrivalAirport.length > 0) {
          setArrivalLoading(false);
        } else {
          setArrivalLoading(true);
        }
      } else {
        setArrivalResult(false);
        setArrivalLoading(false);
      }
    }
  };

  const resultHandler = (i, airport, id, name) => {
    const data = [...form];
    if (id === 'departureInput') {
      setDepartureLoading(false);
      setToggleDeparture(false);
      setDepartureResult(false);
      data[i][id] = name;
      data[i]['departure'] = airport;
    }
    if (id === 'arrivalInput') {
      setArrivalLoading(false);
      setToggleArrival(false);
      setArrivalResult(false);
      data[i][id] = name;
      data[i]['arrival'] = airport;
    }
    setForm(data);
  };

  const submit = () => {
    setLoading(true);
    const field = [];
    form.map((data, i) => {
      if (
        data.passenger !== '' &&
        data.departure !== '' &&
        data.arrival !== '' &&
        data.date !== ''
      ) {
        let arrivalCountry = data.arrival.split(',');
        let departureCountry = data.departure.split(',');
        if (arrivalCountry.length === 1 || departureCountry.length === 1) {
          setLoading(false);
          return Alert.alert(
            'Airport not selected',
            'Please select a valid airport from the dropdown',
            [{text: 'ok'}],
          );
        }
        if (
          departureCountry[departureCountry - 1] !==
          arrivalCountry[arrivalCountry - 1]
        ) {
          field.push({
            departure: data.departure,
            arrival: data.arrival,
            dates: data.dates,
            passenger: data.passenger,
            date: data.date,
            trip: 'intl',
          });
        } else {
          field.push({
            departure: data.departure,
            arrival: data.arrival,
            dates: data.dates,
            passenger: data.passenger,
            date: data.date,
            trip: 'local',
          });
        }

        if (form.length === i + 1) {
          const values = {field, requirementText};
          axios
            .post(`${API_URL}user/book`, values)
            .then(res => {
              setLoading(false);
              navigation('/quote', {state: res.data.flightDetail});
            })
            .catch(() => {
              setLoading(false);
              Alert.alert('Network Error', 'Cannot load data at the moment', [
                {text: 'ok'},
              ]);
            });
        }
      } else {
        setLoading(false);
        Alert.alert('Error', 'Incomplete data', [{text: 'ok'}]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.parentScroll} nestedScrollEnabled={true}>
        <Landing />
        <View>
          <SafeAreaView>
            {form.map((data, i) => (
              <View key={i}>
                <Text style={styles.label}>from</Text>
                <View style={styles.dropdown}>
                  <TextInput
                    placeholder="Departure Airport"
                    style={styles.drop}
                    value={data.departureInput}
                    onChangeText={e => onChangeValue(i, e, 'departureInput')}
                  />
                  <View style={styles.arrow}>
                    {data.departureInput && index === i ? (
                      data.departureInput.length < 3 || !departureLoading ? (
                        <TouchableOpacity
                          onPress={() => clearText(i, 'departureInput')}>
                          <Icon
                            name="clear"
                            size={20}
                            style={{paddingRight: 5}}
                            color="rgba(19, 1, 97, 1)"
                          />
                        </TouchableOpacity>
                      ) : (
                        <ActivityIndicator
                          size="large"
                          color="rgba(19, 1, 97, 1)"
                        />
                      )
                    ) : (
                      <Text />
                    )}
                    <TouchableOpacity
                      onPress={() => onToggle(i, 'departureInput')}>
                      <Icon
                        name={!toggleDeparture ? 'expand-more' : 'expand-less'}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {departureRessult && index === i ? (
                  departureLoading ? (
                    <View style={{position: 'relative'}}>
                      <Text style={styles.viewAirport}>loading airport</Text>
                    </View>
                  ) : (
                    <View style={{position: 'relative'}}>
                      {departureRessult &&
                      index === i &&
                      departureAirport.length > 0 ? (
                        <View style={styles.viewAirport}>
                          {departureAirport.map((airport, id) => {
                            return (
                              <TouchableOpacity
                                key={id}
                                style={{padding: 5}}
                                onPress={() =>
                                  resultHandler(
                                    i,
                                    airport.name + '-' + airport.country,
                                    'departureInput',
                                    airport.name,
                                  )
                                }>
                                <Text style={{fontSize: 14}}>
                                  {airport.name}
                                </Text>
                                <Text style={{fontSize: 10}}>
                                  {airport.country}
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      ) : (
                        <Text style={styles.viewAirport}>
                          We could not find an airport with the keyword
                        </Text>
                      )}
                    </View>
                  )
                ) : (
                  <Text />
                )}
                <Text style={styles.label}>to</Text>
                <View style={styles.dropdown}>
                  <TextInput
                    placeholder="Arrival Airport"
                    style={styles.drop}
                    value={data.arrivalInput}
                    onChangeText={e => onChangeValue(i, e, 'arrivalInput')}
                  />
                  <View style={styles.arrow}>
                    {data.arrivalInput && index === i ? (
                      data.arrivalInput.length < 3 || !arrivalLoading ? (
                        <TouchableOpacity
                          onPress={() => clearText(i, 'arrivalInput')}>
                          <Icon
                            name="clear"
                            size={20}
                            style={{paddingRight: 5}}
                            color="rgba(19, 1, 97, 1)"
                          />
                        </TouchableOpacity>
                      ) : (
                        <ActivityIndicator
                          size="large"
                          color="rgba(19, 1, 97, 1)"
                        />
                      )
                    ) : (
                      <Text />
                    )}
                    <TouchableOpacity
                      onPress={() => onToggle(i, 'arrivalInput')}>
                      <Icon
                        name={!toggleArrival ? 'expand-more' : 'expand-less'}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {arrivalResult && index === i ? (
                  arrivalLoading ? (
                    <View style={{position: 'relative'}}>
                      <Text style={styles.viewAirport}>loading airport</Text>
                    </View>
                  ) : (
                    <View style={{position: 'relative'}}>
                      {arrivalResult &&
                      index === i &&
                      arrivalAirport.length > 0 ? (
                        <View style={styles.viewAirport}>
                          {arrivalAirport.map((airport, id) => (
                            <TouchableOpacity
                              key={id}
                              style={{padding: 5}}
                              onPress={() =>
                                resultHandler(
                                  i,
                                  airport.name + '-' + airport.country,
                                  'arrivalInput',
                                  airport.name,
                                )
                              }>
                              <Text style={{fontSize: 14}}>{airport.name}</Text>
                              <Text style={{fontSize: 10}}>
                                {airport.country}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      ) : (
                        <Text style={styles.viewAirport}>
                          We could not find an airport with the keyword
                        </Text>
                      )}
                    </View>
                  )
                ) : (
                  <Text />
                )}
                <View style={styles.datePass}>
                  <View style={styles.dateView}>
                    <Text style={styles.label}>date</Text>
                    <TouchableOpacity onPress={() => showDate()}>
                      <TextInput
                        placeholder={
                          mode === 'date' ? 'Select date' : 'Select time'
                        }
                        style={styles.input}
                        value={data.dates}
                        editable={false}
                      />
                    </TouchableOpacity>
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
                      name="clear"
                      size={30}
                      color="rgba(19, 1, 97, 1)"
                      style={styles.remove}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {requirement && (
              <TextInput
                placeholder="requirement"
                multiline
                numberOfLines={4}
                style={styles.input}
                onChangeText={val => setRequirementText(val)}
              />
            )}
            <Button text="add return ticket" img="undo" action={newForm} />
            <Button
              text="add requirement"
              img="star"
              action={showRequirement}
            />
            {loading ? (
              <ActivityIndicator size="large" color="rgba(19, 1, 97, 1)" />
            ) : (
              <Button text="book now" action={submit} />
            )}
          </SafeAreaView>
        </View>
      </ScrollView>
      {showTime && index !== null && (
        <DateTimePicker
          display="spinner"
          value={startDate}
          minimumDate={startDate}
          mode={mode}
          onChange={changeDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  parentScroll: {flexGrow: 1},
  label: {
    textTransform: 'uppercase',
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
  viewAirport: {
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 1,
    zIndex: 1,
    right: 0,
    left: 0,
    borderRadius: 10,
    borderColor: 'rgba(19, 1, 97, 1)',
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 10,
    fontSize: 18,
  },
  input: {borderWidth: 1, borderColor: 'rgba(19, 1, 97, 1)', fontSize: 20},
  datePass: {flex: 1, flexDirection: 'row', marginBottom: 10},
  dateView: {flex: 2},
  passengerView: {paddingLeft: 20, flex: 1},
  remove: {flex: 1, alignSelf: 'center'},
});

export default Home;
