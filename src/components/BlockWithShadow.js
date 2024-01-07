import clsx from "clsx"
import { Surface } from 'react-native-paper'


const classToMakeShadowWork = 'bg-white'

function BlockWithShadow({ elevation, ctw = '', children }) {
  return (
    <Surface tw={clsx(classToMakeShadowWork, ctw)} elevation={elevation}>
      {children}
    </Surface>
  )
}

export default BlockWithShadow
