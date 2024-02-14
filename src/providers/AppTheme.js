import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { createContext, useContext, useState } from 'react'

let Context = createContext({
  theme: DefaultTheme,
  setBackground: () => '',
})
//TODO move to main repo and add hook useSetBackgroundOnMountAndRestore()
export const useAppTheme = () => useContext(Context)

let defTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fcfcfc',
  },
}
export default function AppThemeProvider({ children }) {
  const [theme, setTheme] = useState(defTheme)

  const setBackgroundColor = useCallback((color) => {
    setTheme((s) => ({ ...s, colors: { ...s.colors, background: color } }))
  }, [])

  return (
    <Context.Provider
      value={{
        theme,
        setBackgroundColor,
      }}
    >
      <ThemeProvider value={theme}>{children}</ThemeProvider>
    </Context.Provider>
  )
}
