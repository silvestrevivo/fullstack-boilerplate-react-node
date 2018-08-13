import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import Aux from '../hoc/aux';
import Logo from './logo';
import Footer from './footer';

class App extends Component {
  static propTypes = {
    fetchData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <Aux>
        <Logo />
        <Footer />
      </Aux>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(
  mapStateToProps,
  actions
)(hot(module)(App));
