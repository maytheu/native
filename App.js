import React from 'react';
import {NativeRouter, Routes, Route} from 'react-router-native';

import Book from './page/Book';
import Home from './page/Home';
import Quote from './page/Quote';

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quote" element={<Quote />} />
        <Route path="book" element={<Book />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
