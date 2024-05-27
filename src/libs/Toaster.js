import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message'

export const ToastProviderConfig = {
  success: (props) => (
    <View testID={createTestId(props)}>
      <BaseToast {...props} style={{borderLeftColor: '#32c259'}} />
    </View>
  ),
  error: (props) => (
    <View testID={createTestId(props)}>
      <ErrorToast {...props} />
    </View>
  ),
}
function createTestId ( props ) {
   return props.props.testID ? props.props.testID + '_toast' : ''
}
const commonProps = {
  topOffset: 60,
}

export const pushSuccessToast = (msg = 'Done!', opts = {}) => {
  Toast.show({
    ...commonProps,
    visibilityTime: 2000,
    text1: msg,
    ...opts,
    type: 'success',
    props: {
      testID:  opts.testID || 'success'
    }
  })
}

export const pushErrorToast = (msg = 'Something went wrong', opts = {}) => {
  Toast.show({
    ...commonProps,
    visibilityTime: 4000,
    text1: msg,
    ...opts,
    type: 'error',
    props: {
      testID:  opts.testID || 'error'
    }
  })
}
