import AnimationList from "./AnimationList/AnimationList";

export default function Button({ label, ctw, toScreen }) {
  return (
    <AnimationList.ZoomOutOnPress goToScreen={() => toScreen && Go.toScreen(toScreen)}>
      <View tw={cn('rounded-xl bg-primary p-3 px-6', ctw)}>
        <Writing ctw="text-white">{label}</Writing>
      </View>
    </AnimationList.ZoomOutOnPress>
  )
}
