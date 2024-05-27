import AppConfig from '@constants/AppConfig'
import { StripeProvider } from '@stripe/stripe-react-native'
import React from 'react'

const Context = React.createContext({})

function AppStripeProvider(props) {
  //  return props.children
  return <StripeProvider publishableKey={AppConfig.STRIPE_PKEY}>{props.children}</StripeProvider>
}

export default AppStripeProvider
