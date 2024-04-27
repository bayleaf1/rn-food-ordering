import AppText from '@components/AppText/AppText'
import normalizeFontSize from '@components/AppText/normalizeFontSize'
import { getViews } from '@components/components'
import DeviceMeta from '@libs/DeviceMeta'
import { cn } from '@libs/Styling'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input'

const codeHitingProps = {
  label: '',
  value: '',
  onChangeText: (value) => undefined,
  inputViewTw: '',
  inputTw: '',
  placeholder: '',
  containerTw: '',
  leftAddornment: null,
  rightAddornment: null,
  errorMessage: '',
  style: {},
}

function AppTextInput(props = codeHitingProps) {
  return (
    <BaseInput {...props}>
      {({ commonInputProps, getTw, onChangeText }) =>
        props.mask ? (
          <MaskInput
            {...commonInputProps}
            tw={cn(getTw())}
            onChangeText={(_masked, unmasked) => onChangeText(unmasked)}
            mask={props.mask}
          />
        ) : (
          <TextInput {...commonInputProps} tw={cn(getTw())} />
        )
      }
    </BaseInput>
  )
}

AppTextInput.CardNumber = (props = codeHitingProps) => (
  <AppTextInput {...props} mask={Masks.CREDIT_CARD} />
)

AppTextInput.CardExpiration = (props = codeHitingProps) => (
  <AppTextInput {...props} mask={[/\d/, /\d/, '/', /\d/, /\d/]} />
)

AppTextInput.CardCVV = (props = codeHitingProps) => (
  <AppTextInput {...props} mask={[/\d/, /\d/, /\d/]} />
)

const ComponentParts = {
  normalizedInputFontSize: normalizeFontSize(DeviceMeta.iosOrOther(16, 12)),
  InnerBorder: ({ focus }) => (
    <View
      pointerEvents="none"
      tw={cn(
        'absolute top-0 right-0 bottom-0 left-0 rounded-md border border-gray-200',
        focus && 'border-primary'
      )}
    />
  ),
  LabelIfExists: ({ value }) => (value ? <AppText label ctw="mb-1" children={value} /> : null),
  ErrorMessageIfExists: ({ message }) =>
    message ? <AppText xs ctw="mt-1 text-primary" children={message} /> : null,
}

_.merge(AppTextInput, ComponentParts)

export default AppTextInput

let [InputView] = getViews()

function BaseInput(props = codeHitingProps) {
  let [focus, setFocus] = useState(false)
  let ref = useRef(null)

  useEffect(() => {
    if (focus && ref.current) ref.current.focus()
  }, [focus, ref])

  return (
    <Pressable
      onPress={() => setFocus(true)}
      tw={cn('flex-0 w-ful', props.containerTw)}
      style={props.style}
    >
      <AppTextInput.LabelIfExists value={props.label} />

      <InputView
        tw={cn(
          'flex-0 relative w-full flex-row items-center overflow-hidden rounded-md bg-white',
          props.inputViewTw
        )}
      >
        {props.leftAddornment}
        {props.children({
          ...props,
          commonInputProps: {
            onFocus: () => setFocus(true),
            onBlur: () => setFocus(false),
            value: props.value,
            onChangeText: props.onChangeText,
            placeholder: props.placeholder,
            style: { fontSize: AppTextInput.normalizedInputFontSize, fontFamily: 'Primary' },
            ref: ref,
          },
          getTw: () => cn('flex-1 px-2 py-2', props.inputTw),
        })}
        {props.rightAddornment}
        <AppTextInput.InnerBorder focus={focus} />
      </InputView>
      <AppTextInput.ErrorMessageIfExists message={props.errorMessage} />
    </Pressable>
  )
}
