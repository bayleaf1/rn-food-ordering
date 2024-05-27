import Button from '@components/Button'
import { createContext, useContext } from 'react'
import { View } from 'react-native'
import Toast from 'react-native-toast-message'
import { ToastProviderConfig, pushErrorToast, pushSuccessToast } from "@libs/Toaster";

const Context = createContext({
  pushSuccessToast: (msg = '', opts = {}) => '',
  pushErrorToast: (msg = '', opts = {}) => '',
})

export const useToastsProvider = () => useContext(Context)

function ToastsProvider({ children }) {
  return (
    <Context.Provider
      value={{
        pushSuccessToast,
        pushErrorToast,
      }}
    >
      {/* <View tw={cn('mt-10')}/>
      <Button label={'s'} onPress={()=>pushSuccessToast('succ')} />
      <Button label={'e'} onPress={()=>pushErrorToast('error')} /> */}
      {children}
      <Toast config={ToastProviderConfig} />
    </Context.Provider>
  )
}

export default ToastsProvider
