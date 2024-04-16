import { useAppTheme } from '@providers/AppTheme'
import { RadioButton } from 'react-native-paper'

//TODO copy to main repo
export default function Radio({ checked, onPress, color, ctw }) {
  const { theme } = useAppTheme()
  return (
    <View tw={ctw}>
      <RadioButton
        color={color || theme.colors.primary}
        uncheckedColor={theme.colors.border}
        status={checked ? 'checked' : 'unchecked'}
        onPress={onPress}
      />
    </View>
  )
}
