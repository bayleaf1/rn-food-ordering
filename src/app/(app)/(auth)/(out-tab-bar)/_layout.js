import Writing from '@components/Writing/Writing'
import Go from '@libs/Navigation/Go'
import PrimaryStack from '@libs/Navigation/PrimaryStack'
import Screens from '@libs/Navigation/ScreenList'
import { useSessionProvider } from '@providers/SessionProvider'
import { Redirect } from 'expo-router'
import CustomErrorBoundary from '@components/ErrorBoundary'
import { BottomTabsStack } from '@libs/Navigation/TabsStacks'
import ViewWithShadow from '@components/ViewWithShadow'
import Icon from '@components/Pictures/Icon'
import LocalPicture from '@components/Pictures/LocalPicture'
import Rhomb from '@components/Rhomb'
import LayoutWithGaps from '@layouts/LayoutWithGaps'
function Header({ title = '', renderRightElement = () => null }) {
  return (
    <LayoutWithGaps.TopSection>
      <View tw={cn('relative flex flex-row items-center justify-between')}>
        <Rhomb ctw={cn('h-[56px]')} squareTw="bg-white" elevation={2}>
          <Icon name="chevron-left" ctw={cn('h-8 w-8 -translate-x-0.5')} />
        </Rhomb>
        <Writing semibold ctw={cn('absolute left-0 right-0 text-center')}>
          {title}
        </Writing>
        {renderRightElement()}
        {/* <Rhomb ctw={cn('h-[56px]')} squareTw="bg-white" elevation={2}>
          <Icon name="heart-grey" ctw={cn('h-6 w-6 translate-y-0.5')} />
        </Rhomb> */}
      </View>
    </LayoutWithGaps.TopSection>
  )
}

export default function OutTabLayout() {
  return (
    <PrimaryStack
      initialRouteName="foog-review"
      screenOptions={{ headerShown: true, header: () => <Header /> }}
    >
      <PrimaryStack.Screen name="food-review" />
      {/* <PrimaryStack.Screen name="settings" /> */}
    </PrimaryStack>
  )
}
