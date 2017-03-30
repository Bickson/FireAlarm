
import Types from './Types'
import Topics from '../Mqtt/Topics'

export function messageReceived (msg) {
  return dispatch => {
    if (msg.topic === Topics.STATUS) {
      // i believe there are other topics
      const data = JSON.parse(msg.data)
      dispatch(sensorsReceived(data.sensors))
      dispatch(activitiesReceived(data.activities))
    } else {
      return { type: Types.MESSAGE_RECEIVED, msg }
    }
  }
}

function sensorsReceived (sensors) {
  return { type: Types.SENSORS_RECEIVED, sensors }
}

function activitiesReceived (activities) {
  return { type: Types.ACTIVITIES_RECEIVED, activities }
}