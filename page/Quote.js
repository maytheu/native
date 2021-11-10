import React from 'react';
import {ScrollView, Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {useLocation, useNavigate} from 'react-router-native';

import Header from '../component/Header';
import Button from '../component/Button';

const Quote = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state;

  const detailsPage = () => {
    navigate('/book', {state: form});
    console.log(form);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.parentScroll} nestedScrollEnabled={true}>
        <View>
          <SafeAreaView>
            <View>
              <Text style={styles.header}>Your Quote</Text>
            </View>
            <ScrollView>
              {form.map((data, i) => {
                const ticketDate = new Date(data.field.dates);
                const returnDate = ticketDate.setHours(
                  ticketDate.getHours() + 3,
                );
                return (
                  <View key={i}>
                    <View style={styles.firstList}>
                      <Text style={styles.title}>From</Text>
                      <Text style={styles.info}>{data.field.departure}</Text>
                    </View>
                    <View style={styles.secondList}>
                      <Text style={styles.title}>To</Text>
                      <Text style={styles.info}>{data.field.arrival}</Text>
                    </View>
                    <View style={styles.firstList}>
                      <Text style={styles.title}>Passenger</Text>
                      <Text style={styles.info}>{data.field.passenger}</Text>
                    </View>
                    <View style={styles.secondList}>
                      <Text style={styles.title}>Date</Text>
                      <Text style={styles.info}>{data.field.dates}</Text>
                    </View>
                    <Text style={styles.ret}>Return Ticket</Text>
                    <View style={styles.firstList}>
                      <Text style={styles.title}>From</Text>
                      <Text style={styles.info}>{data.field.arrival}</Text>
                    </View>
                    <View style={styles.secondList}>
                      <Text style={styles.title}>To</Text>
                      <Text style={styles.info}>{data.field.departure}</Text>
                    </View>
                    <View style={styles.firstList}>
                      <Text style={styles.title}>Passenger</Text>
                      <Text style={styles.info}>{data.field.passenger}</Text>
                    </View>
                    <View style={styles.secondList}>
                      <Text style={styles.title}>Date</Text>
                      <Text style={styles.info}>{new Date(returnDate).toString()}</Text>
                    </View>
                    <View style={styles.firstList}>
                      <Text style={styles.title}>Passenger</Text>
                      <Text style={styles.info}>{data.field.passenger}</Text>
                    </View>
                    <View style={styles.secondList}>
                      <Text style={styles.title}>Price</Text>
                      <Text style={styles.info}>{data.flight.price}</Text>
                    </View>
                    {form.length - 1 === i && (
                      <View style={styles.firstList}>
                        <Text style={styles.title}>Total</Text>
                        <Text style={styles.info}>{data.flightPrice}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
              <Button text="Continue" action={detailsPage} />
            </ScrollView>
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
  firstList: {
    backgroundColor: '#E5E7EB',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  secondList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  title: {paddingRight: 10, fontSize: 22, paddingLeft: 5, fontWeight: '700'},
  info: {fontSize: 22},
  ret: {fontSize: 25, textAlign: 'center', padding: 5},
});

export default Quote;
