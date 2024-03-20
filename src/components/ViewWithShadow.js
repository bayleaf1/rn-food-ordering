import { Surface } from 'react-native-paper'

const classToMakeShadowWork = 'bg-white'
//TODO add do main repo

function ViewWithShadow({onPress, elevation, ctw = '', children, style }) {
  return (
    <Surface
      tw={cn(classToMakeShadowWork, 'overflow-hidden', ctw)}
      elevation={elevation}
      style={style}
      onPress={onPress}
    >
      {children}
    </Surface>
  )
}

export default ViewWithShadow
