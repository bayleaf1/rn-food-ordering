import { Text, View } from 'react-native'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import AppText from '@components/AppText/AppText'
import Go from '@libs/Navigation/Go'

function ErrorBoundary(props) {
  let TopMargin = View
  return (
    <SafeFullScreenLayout contentTw="flex-1">
      <TopMargin tw="h-[25%]" />
      <AppText xl2 semibold ctw="mx-auto">
        Smth went wrong
      </AppText>
      <AppText size="lg"ctw="mx-auto">
        Message: {props.error.message}
      </AppText>
      <AppText size="sm"onPress={props.retry} ctw="mx-auto mt-8">
        Try Again?
      </AppText>
      {/* <AppText size="xs" ctw="mx-auto">
        or
      </AppText>
      <Go toScreen="settings" ctw="mx-auto">
        <AppText
          sm
        //   onPress={() => {
        //   }}
        >
          Go home
        </AppText>
      </Go> */}
    </SafeFullScreenLayout>
  )
}

export default ErrorBoundary
