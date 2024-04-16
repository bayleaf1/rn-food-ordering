import Writing from '@components/Writing/Writing'
import { Pressable, TextInput } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import normalizeFontSize from '@components/Writing/normalizeFontSize'
import { getViews } from '@components/components'
import { cn } from '@libs/Styling'
import DeviceMeta from '@libs/DeviceMeta'

let [Container, InputView, InputInnerBorder] = getViews()

function WritingInput({
  label,
  value = '',
  onChangeText = () => '',
  inputViewTw,
  inputTw,
  placeholder,
  containerTw,
  leftAddornment = null,
  rightAddornment = null,
  errorMessage,

  style,
}) {
  let [focus, setFocus] = useState(false)
  let ref = useRef(null)

  useEffect(() => {
    if (focus && ref.current) ref.current.focus()
  }, [focus, ref])

  return (
    <Pressable onPress={() => setFocus(true)} tw={cn('flex-0 w-ful', containerTw)} style={style}>
      {/* <Container tw={cn('flex-0 w-ful', containerTw)}> */}
      <WritingInput.Label value={label} />

      <InputView
        tw={cn(
          'flex-0 relative w-full flex-row items-center overflow-hidden rounded-md bg-white',
          inputViewTw
        )}
      >
        {leftAddornment}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          tw={cn('flex-1 px-2 py-2', inputTw)}
          style={{ fontSize: WritingInput.normalizedInputFontSize, fontFamily: 'Primary' }}
          ref={ref}
        />
        {rightAddornment}
        <WritingInput.InnerBorder focus={focus} />
      </InputView>
      <WritingInput.ErrorMessage message={errorMessage} />

      {/* </Container> */}
    </Pressable>
  )
}

WritingInput.normalizedInputFontSize = normalizeFontSize(DeviceMeta.iosOrOther(16, 11))

WritingInput.InnerBorder = ({ focus }) => (
  <InputInnerBorder
    pointerEvents="none"
    tw={cn(
      'absolute top-0 right-0 bottom-0 left-0 rounded-md border border-gray-200',
      focus && 'border-primary'
    )}
  />
)

WritingInput.Label = ({ value }) => (value ? <Writing label ctw="mb-1" children={value} /> : null)

WritingInput.ErrorMessage = ({ message }) =>
  message ? <Writing xs ctw="mt-1 text-primary" children={message} /> : null

export default WritingInput
