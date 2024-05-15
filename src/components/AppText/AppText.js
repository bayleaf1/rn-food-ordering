import { cn } from '@libs/Styling'
import { Text } from 'react-native-paper'
import { useTranslationProvider } from '../../providers/TranslationProvider'
import normalizeFontSize from './normalizeFontSize'

/**
 * @param {Object} props - The component accepts text and onClick as props
 * @param {('xs'|'sm'|'base'|'lg'|'xl'|'2xl')} props.size
 * @param {('thin'|'light'|'regular'|'medium'|'semibold'|'bold')} props.weight
 * @param {(number|undefined)} props.numberOfLines
 * @param {string} props.ctw
 * @param {Object} props.style
 * @param {Object} props.children
 * @param {string|[]} props.t
 * @param {string} props.testID
 */
function AppText(props) {
  const {
    numberOfLines,
    weight = 'regular',
    size = 'base',
    ctw,
    style,
    children,
    t,
    styles,
    testID
  } = props

  let { t: translation } = useTranslationProvider()

  let sizes = {
    xs: 'labelSmall',
    sm: 'labelMedium',
    base: 'bodyLarge',
    lg: 'titleLarge',
    xl: 'headlineLarge',
    '2xl': 'displayMedium',
  }

  const weights = {
    bold: 'PrimaryBold',
    semibold: 'PrimarySemiBold',
    medium: 'PrimaryMedium',
    light: 'PrimaryLight',
    thin: 'PrimaryThin',
    regular: 'Primary',
  }

  return (
    <Text testID={testID} variant={sizes[size]} tw={ctw} style={{ color: 'black', fontFamily: weights[weight] }}>
      {t && translation(...(Array.isArray(t) ? t : [t]))}
      {children}
    </Text>
  )
  return (
    <Wrapper styles={styles}>
      <Text
        style={{
          ...AppText.textStyle(props),
          ...style,
        }}
        tw={cn(ctw)}
        numberOfLines={numberOfLines}
      >
        {t && translation(...(Array.isArray(t) ? t : [t]))}
        {children}
      </Text>
    </Wrapper>
  )
}
AppText.textStyle = (props = propsForHint) => {
  const {
    xl6,
    xl5,
    xl4,
    xl3,
    xl2,
    xl,
    size = 'lg',
    sm,
    s9,
    s8,
    base,
    bold,
    semibold,
    medium,
    light,
    thin,
    regular,
    lineHeight,
    additionalLineHeight,
  } = { ...propsForHint, ...props }

  const sizes = [
    [xl6, 40],
    [xl5, 36],
    [xl4, 32],
    [xl3, 28],
    [xl2, 24],
    [xl, 20],
    [lg, 18],
    [sm, 14],
    [xs, 11],
    [s9, 9],
    [s8, 8],
    [base, 16],
  ].find((v) => v[0])

  const weight = [
    [bold, 'PrimaryBold'],
    [semibold, 'PrimarySemiBold'],
    [medium, 'PrimaryMedium'],
    [light, 'PrimaryLight'],
    [thin, 'PrimaryThin'],
    [regular, 'Primary'],
  ].find((v) => v[0])

  return {
    fontSize: normalizeFontSize(sizes[1]),
    lineHeight: normalizeFontSize(
      typeof lineHeight === 'number' ? lineHeight : sizes[1] + 4 + additionalLineHeight
    ),
    fontFamily: weight[1],
  }
}

export default AppText

// function textStyles({ fontSize = 'base', lineHeight: {}, weight: {}, additionalLineHeight }) {
//   const sizes = {
//     xl6: 40,
//     xl5: 36,
//     xl4: 32,
//     xl3: 28,
//     xl2: 24,
//     xl: 20,
//     size="lg" : 18,
//     sm: 14,
//     size="xs": 11,
//     s9: 9,
//     s8: 8,
//     base: 16,
//   }
//   const weights = {
//     bold: 'PrimaryBold',
//     semibold: 'PrimarySemiBold',
//     medium: 'PrimaryMedium',
//     light: 'PrimaryLight',
//     thin: 'PrimaryThin',
//     regular: 'Primary',
//   }
//   // .find((v) => v[0])
//   const size = (Object.entries(sizes).find((item) => item[0] === fontSize) || ['', sizes.base])[1]

//   const selectedWeight = (Object.entries(weights).find((item) => item[0] === weight) || [
//     '',
//     sizes.base,
//   ])[1]

//   // ].find((v) => v[0])
//   return {
//     fontSize: normalizeFontSize(size),
//     lineHeight: normalizeFontSize(
//       lineHeight === undefined ? size + 4 + additionalLineHeight : selectedWeight
//     ),
//     fontFamily: weight[1],
//   }
// }
