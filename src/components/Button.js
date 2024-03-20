import Go from '@libs/Navigation/Go'
import AnimationList from './AnimationList/AnimationList'

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
}) {
  let style = variants[variant]

  return (
    <AnimationList.ZoomOutOnPress
      goToScreen={() => screenNameToGoOnPress && Go.toScreen(screenNameToGoOnPress)}
      targetSize={0.99}
    >
      <View tw={cn({ 'w-full': fullWidth }, 'self-start rounded-lg p-3 px-6', style.viewTw, ctw)}>
        {renderLabel ? (
          renderLabel({ labelTw: style.labelTw })
        ) : (
          <Writing ctw={cn('text-center', style.labelTw, labelTw)}>{label}</Writing>
        )}
      </View>
    </AnimationList.ZoomOutOnPress>
  )
}
Button.Outlined = ({ label, renderLabel, ctw, screenNameToGoOnPress, fullWidth }) => {
  return (
    <Button {...{ label, renderLabel, ctw, screenNameToGoOnPress, fullWidth }} variant="outlined" />
  )
}
