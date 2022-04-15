import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Splash from './screens/splash'
import Signin from './screens/signin'
import Signup from './screens/signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash/>}/>
      <Route path='/signIn' element={<Signin/>}/>
      <Route path='/signUp' element={<Signup/>}/>
    </Routes>
  );
}

export default App;
