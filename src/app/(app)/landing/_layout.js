import PrimaryStack from '@libs/Navigation/PrimaryStack'

const config = {
  animation: 'spring',
  config: {
    stiffness: 60,
    damping: 3000,
    mass: 2,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

export default function AppLayout() {
  return (
    <PrimaryStack
      initialRouteName="first"
      screenOptions={{
        transitionSpec: {
          open: config,
          close: config,
        },
      }}
    />
  )
}
