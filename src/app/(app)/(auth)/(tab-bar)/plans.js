import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import ViewWithShadow from '@components/ViewWithShadow'
import { NullUser } from '@dto/User'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { useUserProvider } from '@providers/UserProvider'

class BasePlan {
  constructor(user = new NullUser()) {
    this.user = user
    this.id = -1
    this.buttonActionLabel = ''
    this._title = 'Plan'
    this.postConstructor()
  }

  buttonLabel() {
    if (!this.user.hasPlan()) return 'Select this plan'
    return this.user.planId() === this.id ? 'Current plan' : this.buttonActionLabel
  }
  title() {
    return this._title
  }
}

class LitePlan extends BasePlan {
  postConstructor() {
    this.id = 0
    this.buttonActionLabel = 'Downgrade plan'
    this._title = 'Lite Plan'
  }
}
class EasePlan extends BasePlan {
  postConstructor() {
    this.id = 1
    this.buttonActionLabel = 'Upgrade plan'
    this._title = 'Ease Plan'
  }
}

export default function Page() {
  const { user } = useUserProvider()
  const lite = new LitePlan(user)
  const ease = new EasePlan(user)

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="plans_screen">
        Plans
      </AppText>

      <ViewWithShadow>
        <AppText ctw={cn('')}> {lite.title()} </AppText>
        <Button label={lite.buttonLabel()} />
      </ViewWithShadow>
      <View tw={cn('mt-8')}></View>
      <ViewWithShadow>
        <AppText ctw={cn('')}> {ease.title()} </AppText>
        <Button label={ease.buttonLabel()} />
      </ViewWithShadow>
      {/* <View tw={cn('')}>
        <AppTextInput {...getPropsForField('email')}/>
        <FormFieldsSpacer/>
        <AppTextInput.Phone {...getPropsForField('phone')}/>
        <FormFieldsSpacer/>

        <AppTextInput {...getPropsForField('address')}/>
        <FormFieldsSpacer/>

        <AppTextInput {...getPropsForField('unit')}/>
        <FormFieldsSpacer/>

        <AppTextInput {...getPropsForField('zipCode')}/>

        <FormFieldsSpacer/>
        <Button
          label={'Update'}
          labelTw={'text-white'}
          fullWidth
          onPress={() => validateFormAndFetch()}
          loading={loading}
          // onPress={() => Go.toScreen('home')}
          testID="update"
        />
      </View> */}
    </SafeFullScreenLayout>
  )
}
