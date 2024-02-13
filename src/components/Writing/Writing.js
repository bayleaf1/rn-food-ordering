import { Pressable, Text } from 'react-native'
import { useTranslationProvider } from '../../providers/TranslationProvider'
import { Fragment } from 'react'
import normalizeFontSize from './normalizeFontSize'


function Writing({
  xl3,
  xl2,
  xl,
  lg,
  sm,
  xs,
  s9,
  s8,
  base = true,
  bold,
  semibold,
  medium,
  light,
  thin,
  regular = true,
  numberOfLines,
  ctw = '',
  style = {},
  children,
  onPress,
  t = '',
}) {
  const size = [
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
  let { t: translation } = useTranslationProvider()
  let Wrapper = onPress ? (p) => <Pressable onPress={onPress} children={p.children} /> : Fragment
  return (
    <Wrapper>
      <Text
        style={{
          // fontSize: size[1] * (width() * (1 / 300)),
          fontSize: normalizeFontSize(size[1]),
          lineHeight: normalizeFontSize(size[1] + 4),
          fontFamily: weight[1],
          ...style,
        }}
        tw={ctw}
        numberOfLines={numberOfLines}
      >
        {t && translation(...(Array.isArray(t) ? t : [t]))}
        {children}
      </Text>
    </Wrapper>
  )
}

export default Writing
