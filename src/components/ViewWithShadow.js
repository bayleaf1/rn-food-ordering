import { Surface } from 'react-native-paper'


const classToMakeShadowWork = 'bg-white'
//TODO add do main repo

function ViewWithShadow({ elevation, ctw = '', children, style }) {
  return (
    <Surface tw={cn(classToMakeShadowWork, 'overflow-hidden', ctw)} elevation={elevation} style={style}>
      {children}
    </Surface>
  )
}

export default ViewWithShadow
