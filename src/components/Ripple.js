import { TouchableRipple } from "react-native-paper";

function setThisFunctionToMakeRippleWork (  ) {}
//TODO add do main repo
export default function Ripple({ ctw, children }) {
  return (
    <TouchableRipple
      onPress={setThisFunctionToMakeRippleWork}
      rippleColor="rgba(150, 150, 150, 0.2)"
      borderless
      
      tw={cn(ctw)}
    >
      {children}
    </TouchableRipple>
  )
}
