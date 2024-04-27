import { Pressable, Text } from 'react-native'
import { useTranslationProvider } from '../../providers/TranslationProvider'
import { Fragment } from 'react'
import normalizeFontSize from './normalizeFontSize'
import { cn } from '@libs/Styling'

const propsForHint = {
  xl6: false,
  xl5: false,
  xl4: false,
  xl3: false,
  xl2: false,
  xl: false,
  lg: false,
  sm: false,
  xs: false,
  s9: false,
  s8: false,
  base: true,
  bold: false,
  semibold: false,
  medium: false,
  light: false,
  thin: false,
  regular: true,
  numberOfLines: undefined,
  lineHeight: null,
  additionalLineHeight: 0,
  ctw: '',
  style: {},
  children: undefined,
  onPress: undefined,
  t: '',
  styles: {},
}
function AppText(props = propsForHint) {
  const { numberOfLines, ctw, style, children, onPress, t, styles } = props

  let { t: translation } = useTranslationProvider()
  let Wrapper = onPress
    ? (p) => <Pressable onPress={onPress} children={p.children} style={p.styles} />
    : Fragment
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
    lg,
    sm,
    xs,
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

  const size = [
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
    fontSize: normalizeFontSize(size[1]),
    lineHeight: normalizeFontSize(
      typeof lineHeight === 'number' ? lineHeight : size[1] + 4 + additionalLineHeight
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
//     lg: 18,
//     sm: 14,
//     xs: 11,
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
