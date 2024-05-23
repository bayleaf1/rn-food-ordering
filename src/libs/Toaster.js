import Toast from 'react-native-toast-message'

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
    })
  }
  
export  const pushErrorToast = (msg = 'Something went wrong', opts = {}) => {
    Toast.show({
      ...commonProps,
      visibilityTime: 4000,
      text1: msg,
      ...opts,
      type: 'error',
    })
  }