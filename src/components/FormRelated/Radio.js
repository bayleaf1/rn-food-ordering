import { useAppTheme } from '@providers/AppTheme'
import { RadioButton } from 'react-native-paper'

//TODO copy to main repo
export default function Radio({ checked, onPress }) {
  const { theme } = useAppTheme()
  return (
    <RadioButton
      color={theme.colors.primary}
      uncheckedColor={theme.colors.border}
      status={checked ? 'checked' : 'unchecked'}
      onPress={onPress}
    />
  )
}
