import * as React from 'react'
import { useNavigationBuilder, createNavigatorFactory, StackRouter } from '@react-navigation/native'
import { StackView } from '@react-navigation/stack'
import { Animated } from 'react-native'
import { NativeStackView } from '@react-navigation/native-stack'

//Changing the file with custom navigator causes freeze of the app and it needs to be reloaded

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

const defaultOptions = {
  cardStyleInterpolator: forSlide,
  transitionSpec: {
    open: config,
    close: config,
  },
}

function StackNavigator({ initialRouteName, children, screenOptions, ...rest }) {
  const { state, descriptors, navigation, NavigationContent } = useNavigationBuilder(StackRouter, {
    children: addDefaultOptionsToScreens(children, defaultOptions),
    initialRouteName,
    screenOptions,
  })

  return (
    <NavigationContent>
      <NativeStackView {...rest} state={state} navigation={navigation} descriptors={descriptors} />
    </NavigationContent>
  )
}

function addDefaultOptionsToScreens(children, defaultOptions) {
  let array = React.Children.toArray(children)

  return array.map((possibleScreen) => {
    let result = possibleScreen

    if (possibleScreen.type.name === 'Screen') {
      result = React.cloneElement(possibleScreen, {
        ...possibleScreen.props,
        name:  possibleScreen.props.name ? possibleScreen.props.name.toString() : undefined,
        options: { ...defaultOptions, ...(possibleScreen.props.options || {}) },
      })
    }
    return result
  })
}
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

export const createStackNavigatorWithDefaultScreenOptions = createNavigatorFactory(StackNavigator)
