import Go from '@libs/Navigation/Go'
import AnimationList from './AnimationList/AnimationList'
import AppText from '@components/AppText/AppText'

//TODO copy to main repo

let variants = {
  contained: {
    viewTw: `bg-primary`,
    labelTw: `text-white`,
  },
  outlined: {
    viewTw: `bg-transparent border border-primary`,
    labelTw: `text-primary stroke-primary fill-primary`,
  },
}
export default function Button({
  label,
  renderLabel,
  ctw,
  screenNameToGoOnPress,
  variant = 'contained',
  labelTw,
  fullWidth,
  onPress = () => '',
  disabled,
}) {
  let style = variants[variant]

  let Wrapper = disabled
    ? ({ children }) => children
    : ({ children }) => (
        <AnimationList.ZoomOutOnPress
          goToScreen={() => screenNameToGoOnPress && Go.toScreen(screenNameToGoOnPress)}
          targetSize={0.99}
          onPress={onPress}
        >
          {children}
        </AnimationList.ZoomOutOnPress>
      )

  return (
    <Wrapper>
      <View
        pointerEvents={disabled}
        tw={cn(
          { 'w-full': fullWidth },
          'self-start rounded-lg p-3 px-6',
          style.viewTw,
          ctw,
          disabled && 'pointer-events-none bg-gray-100'
        )}
      >
        {renderLabel ? (
          renderLabel({ labelTw: style.labelTw })
        ) : (
          <AppText ctw={cn('text-center', style.labelTw, labelTw)}>{label}</AppText>
        )}
      </View>
    </Wrapper>
  )
}
Button.Outlined = ({ label, renderLabel, ctw, screenNameToGoOnPress, fullWidth, onPress }) => {
  return (
    <Button
      {...{ label, renderLabel, ctw, screenNameToGoOnPress, fullWidth, onPress }}
      variant="outlined"
    />
  )
}
