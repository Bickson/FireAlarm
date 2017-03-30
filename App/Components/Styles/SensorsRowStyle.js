
import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'

export default StyleSheet.create({
  sensorRow: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 3
  },
  room: {
    fontSize: 20
  },
  name: {
    fontSize: 16
  },
  batteryText: {
    fontSize: 16,
    marginRight: 5
  },
  inRow: {
    flexDirection: 'row'
  },
  button: {
    width: '100%',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    backgroundColor: Colors.red,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  batteryBar: {
    height: 15,
    flex: 1,
    backgroundColor: '#EEEEEE',
    borderRadius: 3,
    marginVertical: 5
  }
})