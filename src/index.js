import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Knapp from './Button';
import Enterstock from './Button';
import NameForm from './NameForm'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="Test" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <input />
    <Enterstock label="Add stock"/>
    <NameForm />
  </div>
);


render(<App />, document.getElementById('root'));
