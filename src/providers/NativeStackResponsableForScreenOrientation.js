const { Stack } = require('expo-router')

function NativeStackResponsableForScreenOrientation(props) {
  return <Stack {...props} screenOptions={{ orientation: 'all', headerShown: false }} />
}

export default NativeStackResponsableForScreenOrientation
