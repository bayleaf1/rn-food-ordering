import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Animated } from 'react-native'
import { withLayoutContext } from 'expo-router'

function forSlide({ current, next, inverted, layouts: { screen } }) {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0
  )

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted
          ),
        },
      ],
    },
  }
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 800,
    damping: 1000,
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

let withDefaultScreenOptions = (passed = {}) => ({
  headerShown: false,
  cardStyleInterpolator: forSlide,
  transitionSpec: {
    open: config,
    close: config,
  },
  ...passed,
})
let { Navigator } = createStackNavigator()

let StackForExpoRouter = withLayoutContext(Navigator)

function StackWithDefaultOptions({ children, screenOptions, ...props }) {
  return (
    <StackForExpoRouter
      screenOptions={(...args) => {
        let passed =
          typeof props.screenOptions === 'function' ? screenOptions(...args) : screenOptions
        return withDefaultScreenOptions(passed)
      }}
      {...props}
    >
      {children}
    </StackForExpoRouter>
  )
}

StackWithDefaultOptions.Screen = StackForExpoRouter.Screen


export default PrimaryStack = StackWithDefaultOptions
