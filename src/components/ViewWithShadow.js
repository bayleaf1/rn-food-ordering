import { Surface } from 'react-native-paper'


const classToMakeShadowWork = 'bg-white'

function ViewWithShadow({ elevation, ctw = '', children }) {
  return (
    <Surface tw={cn(classToMakeShadowWork, 'overflow-hidden', ctw)} elevation={elevation}>
      {children}
    </Surface>
  )
}

export default ViewWithShadow
