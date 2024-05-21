import { useFonts } from 'expo-font'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAppLoadingProvider } from './AppLoadingProvider'
import { Pressable } from 'react-native'
import AppText from '@components/AppText/AppText'
import AppConfig from '@constants/AppConfig'
import { removeStorageItemAsync } from '@libs/Storage'

// let start = null
// let end = null

// Loading time ~ 150ms on emulator
let Context = createContext({})

// export const useFontsProvider = () => useContext(Context)

function TestActionsProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {children}

      <Pressable
        tw={cn('absolute  top-4 left-4')}
        testID="test_actions_toggler"
        onPress={() => (setOpen((s) => !s), console.log('49'))}
      >
        <View tw={cn(' h-5 w-5 bg-primary')}></View>
      </Pressable>
      {open && (
        <View tw={cn('absolute top-20 w-full bg-primary p-4')}>
          <Pressable
            testID="auth_token_remover"
            onPress={() => removeStorageItemAsync(AppConfig.AUTH_TOKEN_NAME)}
          >
            <AppText ctw={cn('')}> Remove auth token </AppText>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default TestActionsProvider
