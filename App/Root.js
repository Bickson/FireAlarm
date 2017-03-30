
import React, { Component } from 'react'
import { View } from 'react-native'
import mqtt from 'react-native-mqtt'
import { Provider } from 'react-redux'
import { messageReceived } from './Actions'
import createStore from './Store/Config'
import SensorsScreen from './Containers/SensorsScreen'
import { setupAndConnect, options } from './Mqtt/Config'
import TopBar from './Components/TopBar'
import { silenceOnGoingAlarms } from './Mqtt/Config'

export default class Root extends Component {
  constructor () {
    super()
    this.state = {
      mqttClient: {}
    }
  }

  componentWillMount () {
    this.store = createStore()
    mqtt.createClient(options)
    .then((client) => {
      setupAndConnect(client, this.store.dispatch)
      this.setState({mqttClient: client})
    })
    .catch((err) => console.log(err))
  }

  render() {
    return <Provider store={this.store}>
      <View style={{flex: 1}}>
        <TopBar />
        <SensorsScreen onSilence={() => silenceOnGoingAlarms(this.state.mqttClient)} />
      </View>
    </Provider>
  }
}