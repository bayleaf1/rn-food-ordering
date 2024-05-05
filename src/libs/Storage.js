import * as SecureStore from 'expo-secure-store'
import * as React from 'react'
import { Platform } from 'react-native'

export function useStorageState(key) {
  const [state, setState] = useAsyncState()

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        if (typeof localStorage !== 'undefined') setState(localStorage.getItem(key))
      } catch (e) {
        console.error('Local storage is unavailable:', e, '--libs/Storage')
      }
    } else SecureStore.getItemAsync(key).then(setState)
  }, [key])

  const setValue = React.useCallback(
    (value) => {
      setState(value)
      setStorageItemAsync(key, value)
    },
    [key]
  )

  const removeValue = React.useCallback(() => removeStorageItemAsync(key), [key])

  return [state, setValue, removeValue]

  async function removeStorageItemAsync(key) {
    if (Platform.OS === 'web') {
      try {
        localStorage.removeItem(key)
      } catch (e) {
        console.error('Local storage is unavailable:', e, '--libs/Storage')
      }
    } else {
      await SecureStore.deleteItemAsync(key)
    }
  }
}

function useAsyncState(initialValue = [true, null]) {
  return React.useReducer((state, action) => [false, action], initialValue)
}

async function setStorageItemAsync(key, value) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) localStorage.removeItem(key)
      else localStorage.setItem(key, value)
    } catch (e) {
      console.error('Local storage is unavailable:', e, '--libs/Storage')
    }
  } else {
    if (value === null) await SecureStore.deleteItemAsync(key)
    else await SecureStore.setItemAsync(key, value)
  }
}
