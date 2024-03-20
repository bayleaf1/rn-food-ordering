import { TouchableRipple } from 'react-native-paper'

function setThisFunctionToMakeRippleWork() {}
//TODO add do main repo
export default function Ripple({ ctw, children,  color="rgba(150, 150, 150, 0.2)", onPress = setThisFunctionToMakeRippleWork }) {
  return (
    <TouchableRipple
      unstable_pressDelay={0}
      onPress={onPress}
      rippleColor={color}
      borderless
      tw={cn(ctw)}
    >
      {children}
    </TouchableRipple>
  )
}
