import { useFonts } from 'expo-font'
import { createContext, useContext, useEffect, useState } from 'react'
import { useAppLoadingProvider } from './AppLoadingProvider'

// let start = null
// let end = null

// Loading time ~ 150ms on emulator
let Context = createContext({})

export const useFontsProvider = () => useContext(Context)

function FontsProvider({ children }) {
  // if(start === null) start = Date.now();
  let { setProviderAsLoaded } = useAppLoadingProvider()

  let [loaded] = useFonts({
    PrimaryBold: require('../../assets/fonts/Montserrat/MontserratAlternates-Bold.ttf'),
    PrimarySemiBold: require('../../assets/fonts/Montserrat/MontserratAlternates-SemiBold.ttf'),
    PrimaryMedium: require('../../assets/fonts/Montserrat/MontserratAlternates-Medium.ttf'),
    PrimaryThin: require('../../assets/fonts/Montserrat/MontserratAlternates-Thin.ttf'),
    Primary: require('../../assets/fonts/Montserrat/MontserratAlternates-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) setProviderAsLoaded('fonts')
  }, [loaded])

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setProviderAsLoaded('fonts')
  //   }, 1000 * 0.1)
  // },[])

  //   if (end === null) end = Date.now()
  // let f = end - start
  // console.log("DURATION", f, f / 1000 )

  return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default FontsProvider
