import { createContext, useContext } from "react"
import { View } from "react-native"

const Context = createContext({})

// This hook can be used to access the user info.
export const useToastsProvider = () => useContext(Context)
// TODO implement later if needed
function ToastsProvider({ children }) {
  //   let top = useSharedValue(0)

  //   useEffect(() => {
  //     // top.value = withSpring(top.value + 50)
  //   }, [])
  //   function click() {
  //     console.log(`click:`, click)
  //     top.value = withSpring(top.value + 50, {
  //       mass: 1,
  //       stiffness: 100,
  //       damping: 15,
  //     })
  //   }

  //   function reset() {
  //     console.log(`click:`, click)
  //     top.value = withSpring(0, {
  //       mass: 1,
  //       stiffness: 1000,
  //       damping: 10,
  //     })
  //   }

  return (
    <Context.Provider value={{}}>
      <View tw="relative flex-1">
        {/* <Pressable onPress={click}>
        <View tw=" ml-11 mt-9 h-10 w-10 bg-slate-500" />
      </Pressable>
      <Pressable onPress={reset}>
        <View tw=" ml-11 h-10 w-10 bg-slate-300" />
      </Pressable> */}
        {children}
        {/* <Animated.View tw="absolute left-24 h-24 w-[250px] bg-slate-800" style={{ top }} /> */}
      </View>
    </Context.Provider>
  )
}

export default ToastsProvider
