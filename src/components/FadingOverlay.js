import { useAppTheme } from "@providers/AppTheme"
import { LinearGradient } from "expo-linear-gradient"

export default function FadingOverlay({ color }) {
    const { theme } = useAppTheme()
    
    if (!color) color = theme.colors.background
  
    return (
      <LinearGradient
        colors={[color, 'transparent']}
        style={{
          position: 'absolute',
          top: 0,
          height: 20,
          width: '100%',
          zIndex: 1,
        }}
      />
    )
  }