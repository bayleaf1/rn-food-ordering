import { Surface } from 'react-native-paper'


const classToMakeShadowWork = 'bg-white'
//TODO add do main repo

function ViewWithShadow({ elevation, ctw = '', children }) {
  return (
    <Surface tw={cn(classToMakeShadowWork, 'overflow-hidden', ctw)} elevation={elevation}>
      {children}
    </Surface>
  )
}

export default ViewWithShadow
