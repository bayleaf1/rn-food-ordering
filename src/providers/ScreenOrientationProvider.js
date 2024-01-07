import { createContext, useCallback, useContext, useState } from 'react'
import { useAppLoadingProvider } from './AppLoadingProvider'
import {
  Orientation,
  getOrientationAsync,
  addOrientationChangeListener,
  removeOrientationChangeListener,
} from 'expo-screen-orientation'
import { useOnMount } from '@libs/LifecycleHooks'
import _ from 'lodash'

let Context = createContext({ portraitOrLandscape: _.noop })

export const useScreenOrientationProvider = () => useContext(Context)

const listenWhenOrientationChangesOnlyBetweenPortraitAndLandscape = addOrientationChangeListener

const orientationWhenErrorOrNotLoaded = Orientation.PORTRAIT_UP

function ScreenOrientationProvider({ children }) {
  let { setProviderAsLoaded } = useAppLoadingProvider()
  let [orientation, setOrientation] = useState(null)

  useOnMount(() => {
    getOrientationAsync()
      .then((o) => setOrientation(o))
      .catch((e) => {
        console.error(`--ScreenOrientationProvider--`, e)
        setOrientation(orientationWhenErrorOrNotLoaded)
      })
      .finally(() => setProviderAsLoaded('screenOrientation'))
  })

  useOnMount(() => {
    let listener = (v) => setOrientation(v.orientationInfo.orientation)

    listenWhenOrientationChangesOnlyBetweenPortraitAndLandscape(listener)

    return () => removeOrientationChangeListener(listener)
  })

  let portraitOrLandscape = useCallback(
    (valueWhenPortrait, valueWhenLandscape, fallbackOptionToSelect = 'portrait') => {
      let portrait = [Orientation.PORTRAIT_UP, Orientation.PORTRAIT_DOWN]
      if (_.includes(portrait, orientation)) return valueWhenPortrait

      let landscape = [Orientation.LANDSCAPE_LEFT, Orientation.LANDSCAPE_RIGHT]
      if (_.includes(landscape, orientation)) return valueWhenLandscape

      return fallbackOptionToSelect === 'portrait' ? valueWhenPortrait : valueWhenLandscape
    },
    [orientation]
  )

  return <Context.Provider value={{ portraitOrLandscape }}>{children}</Context.Provider>
}

export default ScreenOrientationProvider
