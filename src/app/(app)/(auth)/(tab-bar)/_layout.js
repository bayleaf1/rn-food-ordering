import AppIcon from '@components/Pictures/AppIcon'
import { useUserProvider } from '@providers/UserProvider'
import { Tabs } from 'expo-router'
import { Pressable } from 'react-native'
//TODO RESTORE
// export const ErrorBoundary = CustomErrorBoundary

function screenOptions({ iconName = 'home', testIDprefix, username, resolveEnabled = () => true }) {
  return {
    tabBarIcon: (props) => (
      <View testID={username + '_username'}>
        <View
          testID={testIDprefix + '_tab_button'}
          tw={cn('h-8 w-8')}
          style={{ width: props.size, height: props.size }}
        >
          <AppIcon
            name={iconName}
            ctw={'h-full w-full'}
            iconElementTw={props.focused && 'fill-primary'}
            iconProps={{ color: 'red' }}
          />
        </View>
      </View>
    ),
    tabBarButton: (p) => {
      let opts = resolveEnabled()
        ? { onLongPress: p.onLongPress, onPress: p.onPress, opacity: 1 }
        : { onLongPress: () => '', onPress: () => '', opacity: 0.5 }

      return (
        <Pressable
          {...p}
          onLongPress={opts.onLongPress}
          onPress={opts.onPress}
          style={[p.style, { opacity: opts.opacity }]}
        />
      )
    },
  }
}
export default function TabsLayout() {
  const { user } = useUserProvider()

  return (
    <Tabs>
      <Tabs.Screen
        name="user"
        options={{
          tabBarLabel: user.shortedUsername(),
          ...screenOptions({
            iconName: 'burger',
            testIDprefix: 'user',
            username: user.usernameForTest(),
          }),
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          ...screenOptions({ iconName: 'burger', resolveEnabled: () => user.isCompleted() }),
        }}
      />
      <Tabs.Screen
        name="payment-info"
        options={{
          tabBarLabel: 'P info',
          ...screenOptions({
            iconName: 'burger',
            testIDprefix: 'payment_info',
            resolveEnabled: () => user.isCompleted(),
          }),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          ...screenOptions({
            iconName: 'burger',
            resolveEnabled: () => user.isCompleted(),
          }),
        }}
      />
    </Tabs>
  )
}
