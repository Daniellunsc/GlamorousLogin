import React from 'react';
import glamorous from 'glamorous';
import './App.css';
import MainLogin from './Components/MainLogin';

const AppBody = glamorous.div({
  textAlign: 'center',
  minWidth: '100vw',
  minHeight: '100vh',

});

const Box = glamorous.div({
  backgroundColor: '#011627',
  position: 'absolute',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const App = () => (
  <AppBody>
    <Box>
      <MainLogin />
    </Box>
  </AppBody>
);

export default App;
