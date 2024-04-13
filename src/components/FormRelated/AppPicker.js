import WritingInput from '@components/FormRelated/WritingInput'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const itemExample = {label: 'Home', value: 'home'}
export default function AppPicker({ label, inputStyle = {}, items=[], style, value, onChangeText, errorMessage }) {
    let [focus, setFocus] = useState(false)
  
    return (
      <View style={style}>
        <WritingInput.Label value={label} />
        <View tw="relative">
          <RNPickerSelect
            onValueChange={(value) => onChangeText(value === null ? '' : value)}
            // placeholder={{}}
            value={value}
            style={{
              ...pickerSelectStyles,
              inputIOS: { ...pickerSelectStyles.inputIOS, ...inputStyle },
              inputAndroid: { ...pickerSelectStyles.inputAndroid, ...inputStyle },
            }}
            onClose={() => setFocus(false)}
            onOpen={() => setFocus(true)}
            items={items}
          />
          <WritingInput.InnerBorder focus={focus} />
        </View>
        <WritingInput.ErrorMessage message={errorMessage} />
      </View>
    )
  }
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: WritingInput.normalizedInputFontSize,
      paddingVertical: 8,
      paddingHorizontal: 5,
      // borderWidth: 0,
      // borderColor: 'gray',
      // borderRadius: 4,
      color: 'black',
      paddingRight: 0, // to ensure the text is never behind the icon
      backgroundColor: 'white',
      height: '100',
    },
    inputAndroid: {
      fontSize: WritingInput.normalizedInputFontSize,
      paddingHorizontal: 5,
      paddingVertical: 8,
      // borderWidth: 0.5,
      // borderColor: 'purple',
      // borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  })