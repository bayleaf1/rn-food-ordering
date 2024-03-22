import { Dimensions, Platform } from 'react-native'

//TODO COPY IN BOILERPLATE
export default {
  androidOrOther(android, other) {
    return Platform.OS == 'android' ? android : other
  },
  iosOrOther(ios, other) {
    return Platform.OS == 'ios' ? ios : other
  },
  windowWidth() {
    return Dimensions.get('window').width
  },
}
