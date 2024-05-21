import AppConfig from '@constants/AppConfig'
import { removeStorageItemAsync } from '@libs/Storage'
import * as Linking from 'expo-linking'
import { createContext, useContext } from 'react'
let Context = createContext({})

export const useFontsProvider = () => useContext(Context)

function DeepLinksProvider({ children }) {
  const response = Linking.useURL();
  const { queryParams } = response ? Linking.parse(response) : { queryParams: {} };
  
  if (queryParams.authTokenStrategy === 'clear') removeStorageItemAsync(AppConfig.AUTH_TOKEN_NAME);
  
    return <Context.Provider value={{}}>{children}</Context.Provider>
}

export default DeepLinksProvider
