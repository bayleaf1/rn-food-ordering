import { StatusBar } from 'expo-status-bar'
import { Text, View, Dimensions, AppState, LogBox, TextInput } from 'react-native'
import { NativeWindStyleSheet } from 'nativewind'
import HomeIcon from './assets/icons/home'
import LocalPicture from './src/components/Pictures/LocalPicture'
import RemotePicture from './src/components/Pictures/RemotePicture'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import BaseLayout from './src/layouts/BaseLayout'
import FontsProvider from './src/providers/FontsProvider'
// import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect, useState } from 'react'
import Writing from './src/components/Writing'
import clsx from 'clsx'
import WritingInput from './src/components/FormRelated/WritingInput'
// LogBox.ignoreLogs(['`new NativeEventEmitter()` was called with a non-null']) //Hide warnings

// let o = console.warn.bind(console);

// console.warn = (...props)=>{
//     // console.log("wARN", ...props);
//     o(...props, ...props)

// }
// console.warn("DO WARN")
// let original = console.log
// console.log = (...props)=>{
//   // console.error('AAA', props);
//   original(...props, ...props)
// }
// console.warn("SOME BAD")
// console.ignoredYellowBox
// console.warn = () => ''
// console.disableYellowBox = true;
// Object.getPrototypeOf(console).warn = () => {
//   console.log('WARNN')
// }
// LogBox.ignoreAllLogs();//Hide all warning notifications on front-end
NativeWindStyleSheet.setOutput({
  default: 'native',
})

//tw - tailwind
//ctw - component tailwind;

//TODO de incercat https://github.com/kristerkari/react-native-svg-example?tab=readme-ov-file
//TODO text, text name component?, textinput, navigation, drawer 1 or 2

export default function App() {
  let data = Array.from({ length: 200 })
  let link = 'https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg'

  const [number, onChangeNumber] = useState('')
  return (
    <FontsProvider>
      <SafeAreaProvider>
        <BaseLayout>
          <View tw="mt-20">
            <Writing h1 semibold numberOfLines={3} ctw="text-white">
              Worem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            </Writing>
          </View>
          {/* CONTINUE */}
          {/* <WritingInput label="Trlalal"/> */}
          {/* <WritingInput containerTw="mt-4" /> */}
          {/* <TextInput
            onChangeText={(e) => {
             console.log(typeof e, e)
              onChangeNumber(e)
            }}
            // inputMode="numeric"
            // secureTextEntry={true}
            // keyboardType='default'
            value={number}
            tw="h-10 text-lg rounded-md border bg-white px-2"
            style={{ fontFamily: 'Primary' }}
          ></TextInput> */}
          {/* <FlatList
          data={data}
          renderItem={(i) => <View tw="mr-8 h-20 w-[200px] bg-orange-600" key={i.index} />}
          ItemSeparatorComponent={<View tw="w-4 h-20 bg-slate-600"></View>}
          // snapToAlignment="center"
          // decelerationRate="normal"
          // stickyHeaderIndices={[0, 1]}
          // pagingEnabled={true}
          horizontal
          // showsHorizontalScrollIndicator={false}
        >
          </FlatList> */}
          {/* {Array.from({ length: 200 }).map((i, key) => (
            <View tw="w-[200px] mr-8 h-20 bg-orange-600" key={key}/>
          ))} */}

          {/* <View tw="box-border mb-20  bg-red-400">
          <Text>
            Lallalalallalalalallalallalalallalallal
          </Text>
        </View>

        <View tw="box-border bg-red-400">
          <Text>
            Lallalalallalalalallalallalalallalallalallalalallalal allalallalalallalalallalalal
          </Text>
        </View>

        <View tw="box-border border bg-red-400">
          <Text>
            Lallalalallalalalallalallalalallalallalallalalallalalallalallalalallalalallalalal
          </Text>
        </View> */}

          {/* <View tw="mt-40 h-20 w-20 border"> */}
          {/* <LocalPicture image="home" /> */}
          {/* <RemotePicture src={link} ctw="w-1/2 h-1/2" /> */}
          {/* </View> */}
          {/* <View tw="w-20 h-20 bg-blue-400" /> */}
          {/* <View tw="w-20 h-20 bg-green-400" /> */}

          <Text tw="text-white">Open up App.js to start working on your app!</Text>
          {/* <StatusBar style="auto" /> */}
          {/* </View> */}

          {/* <Words></Words>
        <Writing h2 bold > Text value</Writing>
        <Narrative></Narrative>
        <AppText></AppText>
        <Letters></Letters>
        <Wording></Wording>
        <Paragraph></Paragraph>
        <Typhography></Typhography> */}
        </BaseLayout>
      </SafeAreaProvider>
    </FontsProvider>
  )
}
