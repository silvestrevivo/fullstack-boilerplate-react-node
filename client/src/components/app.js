import React from 'react';
import { hot } from 'react-hot-loader';
import Aux from '../hoc/aux';
import Logo from './logo';
import Footer from './footer';

const App = () => (
  <Aux>
    <Logo />
    <Footer />
  </Aux>
);

export default hot(module)(App);
