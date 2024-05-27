import AppText from '@components/AppText/AppText'
import Go from '@libs/Navigation/Go'
import AnimationList from './AnimationList/AnimationList'
import Loader from './Loader'
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
  enabled = true,
  loading = false,
  testID,
}) {
  let style = variants[variant]

  let Wrapper = enabled
    ? ({ children }) => (
        <AnimationList.ZoomOutOnPress
          goToScreen={() => screenNameToGoOnPress && Go.toScreen(screenNameToGoOnPress)}
          targetSize={0.99}
          onPress={onPress}
        >
          {children}
        </AnimationList.ZoomOutOnPress>
      )
    : ({ children }) => children

  return (
    <Wrapper>
      <View
        pointerEvents={enabled}
        tw={cn(
          { 'w-full': fullWidth },
          'flex flex-row justify-center self-start rounded-lg p-3 px-6',
          style.viewTw,
          ctw,
          !enabled && 'pointer-events-none bg-gray-100'
        )}
        testID={testID ? testID + '_button' : ''}
      >
        {renderLabel ? (
          renderLabel({ labelTw: style.labelTw })
        ) : (
          <AppText ctw={cn('text-center', style.labelTw, labelTw)}>{label}</AppText>
        )}
        {loading && (
          <View tw={cn('ml-1 flex justify-center')}>
            <Loader size={15} color="blue"></Loader>
          </View>
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
