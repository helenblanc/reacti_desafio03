import React, { useState } from 'react';
import Headers from './Components/Headers';
import CustomForm from './Components/CustomForm';
import Footer from './Components/Footer';
import Container from 'react-bootstrap/Container';

function App(){

  let colaboradores = require('./data.json');
  return (
    <Container>
      <Headers/>
      <CustomForm colaboradores={colaboradores} />
      <Footer/>
    </Container>
  );
}

export default App;
