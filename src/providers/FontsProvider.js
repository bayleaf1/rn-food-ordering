import { useFonts } from 'expo-font'
import { createContext, useContext } from 'react'

// let start = null
// let end = null

// Loading time ~ 150ms on emulator
let Context = createContext({
  providerIsLoaded: false,
})

export const useFontsProvider = () => useContext(Context)

function FontsProvider({ children }) {
  // if(start === null) start = Date.now();

  let [loaded] = useFonts({
    PrimaryBold: require('../../assets/fonts/Montserrat/MontserratAlternates-Bold.ttf'),
    PrimarySemiBold: require('../../assets/fonts/Montserrat/MontserratAlternates-SemiBold.ttf'),
    PrimaryMedium: require('../../assets/fonts/Montserrat/MontserratAlternates-Medium.ttf'),
    PrimaryThin: require('../../assets/fonts/Montserrat/MontserratAlternates-Thin.ttf'),
    Primary: require('../../assets/fonts/Montserrat/MontserratAlternates-Regular.ttf'),
  })
  //TODO handle this
  if (!loaded) return null///

  //   if (end === null) end = Date.now()
  // let f = end - start
  // console.log("DURATION", f, f / 1000 )

  return <Context.Provider value={{ providerIsLoaded: loaded }}>{children}</Context.Provider>
}

export default FontsProvider
