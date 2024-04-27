import { Drawer } from 'expo-router/drawer'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Go from './Go'

import { useDrawerProgress } from '@react-navigation/drawer'
import { useWindowDimensions } from 'react-native'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import AppText from '@components/AppText/AppText'

let withDefaultScreenOptions = (passed = {}) => ({
  overlayColor: 'transparent',
  ...passed,
  drawerType: 'slide',
})

export function SliderDrawerStack(props) {
  return (
    <Drawer
      {...props}
      drawerContent={(props) => <CustomSlideDrawerContent {...props} />}
      screenOptions={(...args) => {
        let passed =
          typeof props.screenOptions === 'function'
            ? props.screenOptions(...args)
            : props.screenOptions
        return withDefaultScreenOptions(passed)
      }}
    />
  )
}

SliderDrawerStack.Screen = Drawer.Screen
SliderDrawerStack.SceneZoomOut = SceneScreenZoomOut

function CustomSlideDrawerContent({ state, navigation }) {
  return (
    <SafeFullScreenLayout>
      <AppText h2>Custom drawer</AppText>

      <AppText onPress={navigation.closeDrawer}>Close</AppText>

      {state.routes.map((route, idx) => {
        let isActive = idx === state.index
        return (
          <Go
            ctw={cn('mt-2 rounded-md p-2', isActive ? 'bg-slate-500' : '')}
            toScreen={'drawer' + route.name}
            key={idx}
          >
            <AppText>{route.name}</AppText>
          </Go>
        )
      })}
    </SafeFullScreenLayout>
  )
}

function SceneScreenZoomOut({ children }) {
  const progress = useDrawerProgress()
  const { width } = useWindowDimensions()

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      {
        scale: interpolate(progress.value, [0, 1], [1, 0.8], 'clamp'),
      },
      // {
      //   rotateY: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
      // },
      // {
      //   translateX: interpolate(
      //     progress.value,
      //     [0, 1],
      //     [0, Platform.OS === 'android' ? width - 130 : -60],
      //     'clamp'
      //   ),
      // },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
    overflow: 'hidden',
  }))

  return (
    <Animated.View tw="flex-1 bg-red-400" style={[animatedStyle]}>
      {children}
    </Animated.View>
  )
}
