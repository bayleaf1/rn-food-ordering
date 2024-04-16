import Button from '@components/Button'
import AppPicker from '@components/FormRelated/AppPicker'
import WritingInput from '@components/FormRelated/WritingInput'
import useForm from '@components/FormRelated/useForm'
import SpacerView from '@components/SpacerView'
import LayoutWithGaps from '@layouts/LayoutWithGaps'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, View } from 'react-native'
import MaskInput, { Masks } from 'react-native-mask-input'

const inputTw = 'py-[14px]'

export default function Modal() {
  let { getPropsForField, validateForm } = useForm({
    fields: {
      fullName: { value: '', validate: useForm.validators.minLength(5) },
      cardNumber: { value: '', validate: useForm.validators.length(16) },
      expiration: { value: '', validate: useForm.validators.length(4) },
      cvv: { value: '', validate: useForm.validators.length(3) },
    },
  })

  let router = useRouter()

  return (
    <>
      <StatusBar style="light" />
      <LayoutWithGaps.BottomSection contentTw={'bg-gray-300x mt-6 flex-1 justify-between'}>
        <View tw="flex gap-4">
          <WritingInput {...getPropsForField('fullName')} inputTw={inputTw} />
          <WritingInput.CardNumber
            {...getPropsForField('cardNumber')}
            placeholder="1234 1234 1234 1234"
            inputTw={inputTw}
          />

          <View tw={cn('flex flex-row ')}>
            <WritingInput.CardExpiration
              {...getPropsForField('expiration')}
              inputTw={inputTw}
              placeholder="12/34"
              containerTw="flex-1"
            />
            <SpacerView ctw={'w-3'} />
            <WritingInput.CardCVV
              {...getPropsForField('cvv')}
              inputTw={inputTw}
              containerTw="flex-1"
              placeholder={'123'}
              label={'cvv'}
            />
          </View>
        </View>
        <Button
          label="Save"
          fullWidth
          onPress={() => {
            validateForm({
              onOk: ({ fields }) => {
                console.log('OKOKOKOK', fields)
                router.back()
              },
            })
          }}
        />
      </LayoutWithGaps.BottomSection>
    </>
  )
}

function CardNumber({
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
      <WritingInput.LabelIfExists value={label} />

      <View
        tw={cn(
          'flex-0 relative w-full flex-row items-center overflow-hidden rounded-md bg-white',
          inputViewTw
        )}
      >
        {leftAddornment}

        <MaskInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={value}
          onChangeText={(_masked, unmasked) => onChangeText(unmasked)}
          mask={Masks.CREDIT_CARD}
          placeholder={placeholder}
          tw={cn('flex-1 px-2 py-2', inputTw)}
          style={{ fontSize: WritingInput.normalizedInputFontSize, fontFamily: 'Primary' }}
          ref={ref}
        />
        {rightAddornment}
        <WritingInput.InnerBorder focus={focus} />
      </View>
      <WritingInput.ErrorMessageIfExists message={errorMessage} />
    </Pressable>
  )
}
