import AppText from '@components/AppText/AppText'
import { useAppTheme } from '@providers/AppTheme'
import { TextInput } from 'react-native'
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

Animated.addWhitelistedNativeProps({ text: true })

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export default function LandingAnimatedText({ title, subtitle }) {
  return (
    <View tw={cn('mt-8')}>
      <AnimatedText value={title} />
      <Animated.View
        tw={cn('mt-2')}
        entering={FadeInLeft.delay(1400).duration(700).easing(Easing.out(Easing.ease))}
      >
        <AppText ctw={cn('text-center text-primary')} semibold xl2>
          {subtitle}
        </AppText>
      </Animated.View>
    </View>
  )
}

LandingAnimatedText.animationDurationMs = 2600

function AnimatedText({ value = '', duration = 1500 }) {
  const sv = useSharedValue(0)

  sv.value = withTiming(value.length, {
    duration: duration,
    easing: Easing.inOut(Easing.quad),
  })

  const animatedProps = useAnimatedProps(() => ({
    text: value.slice(0, sv.value.toFixed()),
    defaultValue: '',
  }))
  const { theme } = useAppTheme()

  return (
    <AnimatedTextInput
      animatedProps={animatedProps}
      multiline={true}
      editable={false}
      style={{
        color: theme.colors.primary,
        textAlign: 'center',
        ...AppText.textStyle({ xl: true }),
      }}
    />
  )
}
