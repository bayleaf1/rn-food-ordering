import Writing from '@components/Writing/Writing'
import { Pressable, TextInput } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import normalizeFontSize from '@components/Writing/normalizeFontSize'
import { getViews } from '@components/components'
import { cn } from '@libs/Styling'

let [Container, InputView, InputInnerBorder] = getViews()

function WritingInput({
  label,
  value = '',
  onChangeText = () => '',
  inputViewTw,
  placeholder,
  containerTw,
  leftAddornment = null,
  rightAddornment = null,
}) {
  let [focus, setFocus] = useState(false)
  let ref = useRef(null)

  useEffect(() => {
    if (focus && ref.current) ref.current.focus()
  }, [focus, ref])

  return (
    <Pressable onPress={() => setFocus(true)} tw={cn('flex-0 w-ful', containerTw)}>
      {/* <Container tw={cn('flex-0 w-ful', containerTw)}> */}
      {label && <Writing label ctw="mb-1" children={label} />}

      <InputView
        tw={cn(
          'flex-0 relative w-full flex-row items-center overflow-hidden rounded-md',
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
          tw="flex-1 px-2 py-2"
          style={{ fontSize: normalizeFontSize(11), fontFamily: 'Primary' }}
          ref={ref}
        />
        {rightAddornment}
        <InputInnerBorder
          pointerEvents="none"
          tw={cn(
            'absolute top-0 right-0 bottom-0 left-0 rounded-md border-2 border-white'
            // focus && ' border-primary'
          )}
        />
      </InputView>
      {/* </Container> */}
    </Pressable>
  )
}

export default WritingInput
