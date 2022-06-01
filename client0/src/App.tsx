import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Splash from './screens/splash'
import Signin from './screens/signin'
import Signup from './screens/signup';
import Sportsman from './screens/sportsman';
import Training from './screens/training';
import StartWorkout from './screens/startWorkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/signIn' element={<Signin />} />
      <Route path='/signUp' element={<Signup />} />
      <Route path='/sportsman' element={<Sportsman />} />
      <Route path='/training' element={<Training />} />
      <Route path='/startWorkout' element={<StartWorkout />} />
    </Routes>
  );
}

export default App;
