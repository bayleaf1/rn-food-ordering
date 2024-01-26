import { Text, View } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Writing from '@components/Writing/Writing'
import Go from '@libs/Navigation/Go'

function ErrorBoundary(props) {
  let TopMargin = View
  return (
    <SafeFullScreenLayout contentTw="flex-1">
      <TopMargin tw="h-[25%]" />
      <Writing xl2 semibold ctw="mx-auto">
        Smth went wrong
      </Writing>
      <Writing lg ctw="mx-auto">
        Message: {props.error.message}
      </Writing>
      <Writing sm onPress={props.retry} ctw="mx-auto mt-8">
        Try Again?
      </Writing>
      {/* <Writing xs ctw="mx-auto">
        or
      </Writing>
      <Go toScreen="settings" ctw="mx-auto">
        <Writing
          sm
        //   onPress={() => {
        //   }}
        >
          Go home
        </Writing>
      </Go> */}
    </SafeFullScreenLayout>
  )
}

export default ErrorBoundary
