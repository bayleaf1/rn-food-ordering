const { Stack } = require('expo-router')

function NativeStackResponsableForScreenOrientation(props) {
  return <Stack {...props} screenOptions={{ orientation: 'all', headerShown: false }} />
}

NativeStackResponsableForScreenOrientation.Screen = Stack.Screen

export default NativeStackResponsableForScreenOrientation
