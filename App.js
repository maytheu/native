import React, {useEffect} from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';
import SplashScreen from 'react-native-splash-screen';

import Book from './page/Book';
import Confirmation from './page/Confirmation';
import Home from './page/Home';
import Payment from './page/Payment';
import Quote from './page/Quote';
import Flight from './page/Flight';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flight" element={<Flight />} />
        <Route path="quote" element={<Quote />} />
        <Route path="book" element={<Book />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
