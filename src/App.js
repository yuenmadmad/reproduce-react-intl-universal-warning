import React, { Component } from 'react';
// import logo from './logo.svg';
import intl from 'react-intl-universal'
import enLocales from './locales/en.json'
import './App.css';

class App extends Component {
  state = {
    initDone: false
  }
  constructor (props) {
    super(props)
    intl.init({
      currentLocale: 'en',
      locales: {
        en: enLocales
      }
    }).then(() => this.setState({initDone: true}))
  }
  render() {
    // works but have warnings
    return (
      <div>
        {Object.keys(intl.get('common')).map(happy => <div>{happy}</div>)}
      </div>
    );
  }
}

export default App;
