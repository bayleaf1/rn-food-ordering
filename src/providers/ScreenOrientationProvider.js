import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useAppLoadingProvider } from './AppLoadingProvider'
import {
  Orientation,
  getOrientationAsync,
  addOrientationChangeListener,
  removeOrientationChangeListener,
} from 'expo-screen-orientation'
import { useOnMount } from '@libs/LifecycleHooks'

let Context = createContext({})

export const useScreenOrientationProvider = () => useContext(Context)

const listenWhenOrientationChangesOnlyBetweenPortaitAndLandscape = addOrientationChangeListener

function ScreenOrientationProvider({ children }) {
  let { setProviderAsLoaded } = useAppLoadingProvider()
  let [orientation, setOrientation] = useState(null)

  useOnMount(() => {
    getOrientationAsync()
      .then((o) => setOrientation(o))
      .catch((e) => {
        console.error(`--ScreenOrientationProvider--`, e)
        setOrientation(Orientation.PORTRAIT_UP)
      })
      .finally(() => setProviderAsLoaded('screenOrientation'))
  })

  useOnMount(() => {
    let listener = (v) => setOrientation(v.orientationInfo.orientation)

    listenWhenOrientationChangesOnlyBetweenPortaitAndLandscape(listener)

    return () => removeOrientationChangeListener(listener)
  })

  let portOrLand = useCallback((valueWhenPortrait, valueWhenLandscape) => {

  }, [])

  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default ScreenOrientationProvider
