/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './App/Root'

export default class FireAlarm extends Component {
  render() {
    return <Root />
  }
}

AppRegistry.registerComponent('FireAlarm', () => FireAlarm);
