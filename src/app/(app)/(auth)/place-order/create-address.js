import Button from '@components/Button'
import AppPicker from '@components/FormRelated/AppPicker'
import AppTextInput from '@components/FormRelated/AppTextInput'
import useForm from '@components/FormRelated/useForm'
import LayoutWithGaps from '@layouts/LayoutWithGaps'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

const inputTw = 'py-[14px]'
const inputStyle = { paddingVertical: 14 }

export default function Modal() {
  let { getPropsForField, validateForm } = useForm({
    fields: {
      title: { value: '', validate: useForm.validators.minLength(3) },
      type: { value: '', validate: useForm.validators.selectDropdownItem },
      phone: { value: '', validate: useForm.validators.minLength(1) },
      address: { value: '', validate: useForm.validators.minLength(1) },
      zipcode: { value: '', validate: useForm.validators.minLength(1) },
    },
  })

  let router = useRouter()

  return (
    <>
      <StatusBar style="light" />
      <LayoutWithGaps.BottomSection contentTw={'bg-gray-300x mt-6 flex-1 justify-between'}>
        <View tw="flex gap-4">
          <AppTextInput
            placeholder={'Title'}
            label={'Title'}
            {...getPropsForField('title')}
            inputTw={inputTw}
          />
          <AppPicker
            label={'Type'}
            inputStyle={inputStyle}
            {...getPropsForField('type')}
            items={[
              { label: 'Home', value: 'home' },
              { label: 'Office', value: 'office' },
            ]}
          />
          <AppTextInput
            placeholder={'Phone'}
            label={'Phone'}
            inputTw={inputTw}
            {...getPropsForField('phone')}
          />
          <AppTextInput
            placeholder={'Address'}
            label={'Address'}
            inputTw={inputTw}
            {...getPropsForField('address')}
          />
          <AppTextInput
            placeholder={'Zip code'}
            label={'Zip code'}
            inputTw={inputTw}
            {...getPropsForField('zipcode')}
          />
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
