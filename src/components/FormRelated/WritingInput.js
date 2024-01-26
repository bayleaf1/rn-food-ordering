import clsx from 'clsx'
import Writing from '@components/Writing/Writing'
import { TextInput, View } from 'react-native'
import { useState } from 'react'

let [Container, InputView, InputInnerBorder] = [View, View, View]

function WritingInput({ label, containerTw, leftAddornment = null, rightAddornment = null }) {
  let [focus, setFocus] = useState(false)

  return (
    <Container tw={clsx('flex-0 w-ful', containerTw)}>
      {label && <Writing label ctw="mb-1" children={label} />}

      <InputView tw={'flex-0 relative w-full flex-row overflow-hidden rounded-md bg-white outline'}>
        {leftAddornment}
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value="123"
          tw="flex-1 self-start justify-self-start px-2 py-2"
          style={{ fontSize: 20, fontFamily: 'Primary' }}
        />
        {rightAddornment}
        <InputInnerBorder
          pointerEvents="none"
          tw={clsx(
            'absolute top-0 right-0 bottom-0 left-0 rounded-md border border-gray-300',
            focus && 'border-2 border-blue-500'
          )}
        />
      </InputView>
    </Container>
  )
}

export default WritingInput
