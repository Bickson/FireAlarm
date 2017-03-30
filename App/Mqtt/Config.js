
import { messageReceived } from '../Actions'
import Topics from './Topics'

export const options = {
  port: 1883,
  auth: false,
  keepalive: 45,
  tls: false,
  selfSignedCertificates: false,
  host: '127.0.0.1', //change to your IPaddress
  clientId: 'test'
}

export function setupAndConnect (client, dispatch) {
  client.on('closed', function() {
    console.log('mqtt.event.closed');
  })

  client.on('error', function(msg) {
    console.log('mqtt.event.error', msg);
  })

  client.on('message', function(msg) {
    dispatch(messageReceived(msg))
  })

  client.on('connect', function() {
    console.log('connected');
    client.subscribe(Topics.STATUS, 0);
  })

  client.connect();
}

export function silenceOnGoingAlarms(client) {
  client.publish(Topics.COMMAND, '{"command": "SITUATION_UNDER_CONTROL"}' , 0, false);
}