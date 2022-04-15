import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Splash from './screens/splash/splash'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Splash/>}/>
      {/* <Button>Hello</Button> */}
    </Routes>
  );
}

export default App;
