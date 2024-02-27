import AnimationList from "./AnimationList/AnimationList";
import ViewWithShadow from "./ViewWithShadow";

export default function Rhomb({ ctw, squareTw = 'bg-primary', elevation = 3, onPress, children }) {
    return (
      <AnimationList.ZoomOutOnPress onPress={onPress}>
        <View tw={cn('relative aspect-square py-1 px-1', ctw)}>
          <ViewWithShadow
            elevation={elevation}
            ctw={cn('inset-0 aspect-square h-full w-full rotate-45 rounded-xl', squareTw)}
          />
          <View tw="absolute inset-0 flex items-center justify-center">{children}</View>
        </View>
      </AnimationList.ZoomOutOnPress>
    )
  }