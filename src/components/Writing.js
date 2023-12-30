import { Dimensions, Text } from "react-native"

const width = () => Dimensions.get('window').width

function Writing({
  h2,
  h1,
  label,
  p = true,
  bold,
  semibold,
  medium,
  thin,
  regular = true,
  numberOfLines,
  ctw = '',
  style = {},
  children,
}) {
  const size = [
    [h1, 26],
    [h2, 21],
    [label, 11],
    [p, 15],
  ].find((v) => v[0])

  const weight = [
    [bold, 'PrimaryBold'],
    [semibold, 'PrimarySemiBold'],
    [medium, 'PrimaryMedium'],
    [thin, 'PrimaryThin'],
    [regular, 'Primary'],
  ].find((v) => v[0])

  return (
    <Text
      style={{
        fontSize: size[1] * (width() * (1 / 300)),
        fontFamily: weight[1],
        ...style
      }}
      tw={ctw}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  )
}


export default Writing;