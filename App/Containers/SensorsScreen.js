
import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import SensorRow from '../Components/SensorRow'
import { silenceOnGoingAlarms } from '../Mqtt/Config'

class SensorsScreen extends Component {

  render () {
    return <ScrollView style={{flex: 1, backgroundColor: '#EFEFEF'}}>
      {this.props.sensors.map((sensor, index) => {
        return <SensorRow key={index} sensor={sensor} onSilence={this.props.onSilence}/>
      })}
    </ScrollView>
  }
}

const select = (store) => {
  return {
    sensors: store.sensors.data
  }
}

export default connect(select)(SensorsScreen)