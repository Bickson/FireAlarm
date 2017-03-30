
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './Styles/SensorsRowStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Colors from '../Themes/Colors'

export default class SensorRow extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  getBatteryColor (level) {
    if (level < 33) return Colors.orange
    if (level < 66) return Colors.yellow
    return Colors.green
  }

  renderBatteryLevel (batteryLevel) {
    return <View style={styles.batteryBar}>
      <View style={{ height: 15, backgroundColor: this.getBatteryColor(batteryLevel), borderRadius: 2, width: `${batteryLevel}%`}}/>
    </View>
  }

  onPress () {
    this.state.open
    ? this.refs.view.flipOutX(300).then(() => this.setState({open: false}))
    : this.setState({open: true})
  }

  renderAlarm (alarmActive) {
    return <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" style={{justifyContent: 'center', marginRight: 10}}>
      <Icon name='md-alert' color='#C70039' size={40} />
    </Animatable.View>
  }

  renderSilenceButton () {
    return <TouchableOpacity onPress={() => this.props.onSilence()} style={styles.button}>
      <Text style={styles.buttonText}>SILENCE ALARM</Text>
    </TouchableOpacity>
  }

  renderContent (sensor) {
    if (!this.state.open) return null
    return <Animatable.View ref='view' animation={this.state.open ? 'flipInX' : false} duration={300} style={{marginTop: 10}}>
      <View style={{marginVertical: 5}}>
          <Text style={styles.batteryText}>Battery {sensor.batteryLevel}%</Text>
          {this.renderBatteryLevel(sensor.batteryLevel)}
      </View>

      {sensor.alarmActive && !sensor.silenced ? this.renderSilenceButton() : null}
      {sensor.silenced ? <Text style={{color: Colors.red}}>Alarm silenced</Text> : null}
    </Animatable.View>
  }

  render () {
    console.log(this.props)
    const { sensor } = this.props

    return <View style={styles.sensorRow}>
      <TouchableOpacity onPress={() => this.onPress() } style={styles.inRow}>
        {sensor.alarmActive ? this.renderAlarm(sensor.alarmActive) : null}
        <View style={{flex: 1}}>
          <Text style={styles.room}>{sensor.roomName.toUpperCase()}</Text>
          <View style={[styles.inRow, {justifyContent: 'space-between'}]}>
            <Text style={styles.name}>{sensor.deviceName}</Text>
            <Text style={{fontSize: 16, fontWeight: '500',color: sensor.online ? '#2ECC71' : '#C70039'}}> {sensor.online ? 'Online' : 'Offline'}</Text>
          </View>
        </View>
        <Icon name={this.state.open ? 'ios-arrow-up' : 'ios-arrow-down'} size={28} />
      </TouchableOpacity>

      {this.renderContent(sensor)}
    </View>
  }
}
