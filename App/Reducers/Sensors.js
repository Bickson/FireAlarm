
import Types from '../Actions/Types'

const initState = {
  data: []
}

export default function filter (state = initState, action = {}) {
  switch (action.type) {
    case Types.SENSORS_RECEIVED:
      return {
        ...state,
        data: action.sensors
      }
    default:
      return state
  }
}
