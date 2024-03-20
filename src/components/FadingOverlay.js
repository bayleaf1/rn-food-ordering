import { useAppTheme } from '@providers/AppTheme'
import { LinearGradient } from 'expo-linear-gradient'

export default function FadingOverlay({height = 20, color, direction = 'top->bottom' }) {
  const { theme } = useAppTheme()

  if (!color) color = theme.colors.background
  let result = {
    'top->bottom': {
      gradient: [color, 'transparent'],
      style: { top: 0 },
    },
    'bottom->top': {
      gradient: ['transparent', color],
      style: { bottom: 0 },
    },
  }[direction]

  return (
    <LinearGradient
      colors={result.gradient}
      style={{
        position: 'absolute',
        height,
        width: '100%',
        zIndex: 1,
        ...result.style,
      }}
    />
  )
}
