import AppText from '@components/AppText/AppText'
import Button from '@components/Button'
import Loader from '@components/Loader'
import ViewWithShadow from '@components/ViewWithShadow'
import endpoints from '@constants/endpoints'
import { NullUser } from '@dto/User'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import Clock from '@libs/Clock'
import AppLink from '@libs/Navigation/AppLink'
import { Screens } from '@libs/Navigation/ScreenList'
import { pushSuccessToast } from '@libs/Toaster'
import { useApiProvider } from '@providers/ApiProvider'
import { useUserProvider } from '@providers/UserProvider'
import { useFocusEffect, useLocalSearchParams } from 'expo-router'
import { useEffect, useMemo } from 'react'
class BasePlan {
  constructor(user = new NullUser()) {
    this.user = user //new NullUser()
    this._id = -1
    this.buttonActionLabel = ''
    this._title = 'Plan'
    this._testID = 'plan'
    this.postConstructor()
  }

  buttonLabel() {
    if (!this.user.hasPlan()) return 'Select this plan'
    return this.isActiveForUser() ? 'Current plan' : this.buttonActionLabel
  }
  id() {
    return this._id
  }
  title() {
    return this._title
  }

  testID() {
    return this._testID
  }

  isActiveForUser() {
    return this.user.planId() === this._id
  }
  missForUser() {
    return !this.isActiveForUser()
  }
}

class LitePlan extends BasePlan {
  postConstructor() {
    this._id = 0
    this.buttonActionLabel = 'Downgrade plan'
    this._title = 'Lite Plan'
    this._testID = 'lite_plan'
  }
}
class EasePlan extends BasePlan {
  postConstructor() {
    this._id = 1
    this.buttonActionLabel = 'Upgrade plan'
    this._title = 'Ease Plan'
    this._testID = 'ease_plan'
  }
}

export default function Page() {
  const { user, refetchUser } = useUserProvider()
  const { patch } = useApiProvider()

  const lite = new LitePlan(user)
  const ease = new EasePlan(user)

  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="plans_screen">
        Plans
      </AppText>

      <ViewWithShadow key={Date.now()}>
        <AppText ctw={cn('')} testID={`${lite.isActiveForUser() ? 'with' : 'without'}_subscription_for_${lite.testID()}`}>
          {lite.title()}
        </AppText>
        <Button
          label={lite.buttonLabel()}
          testID={lite.testID()}
          onPress={() => {
            if (lite.missForUser()) AppLink.navigateToHref(Screens.order(lite.id()))
          }}
        />
      </ViewWithShadow>
      <View tw={cn('mt-8')}></View>
      <ViewWithShadow>
        <AppText ctw={cn('')} testID={`${ease.isActiveForUser() ? 'with' : 'without'}_subscription_for_${ease.testID()}`}>
          {ease.title()}
        </AppText>
        <Button
          label={ease.buttonLabel()}
          testID={ease.testID()}
          onPress={() => {
            if (ease.missForUser()) AppLink.navigateToHref(Screens.order(ease.id()))
          }}
        />
      </ViewWithShadow>

      {user.hasPlan() && (
        <View tw={cn('mt-3')}>
          <AppText ctw={cn('')}>
            {' '}
            Your next payment date: {Clock.formatNextPayment(
              user.nextDateForSubscriptionCharge()
            )}{' '}
          </AppText>

          {user.canCancelSubscription() && (
            <Button
              label={'Cancel Subscription'}
              ctw={'mt-2'}
              testID={'cancel_subscription'}
              onPress={() => {
                patch({
                  endpoint: endpoints.cancelCurrentPlanSubscriptionAsUser,
                  onSuccess: () => {
                    refetchUser({
                      extraOnSuccess: () => {
                        pushSuccessToast('Subscription was canceled')
                      },
                    })
                  },
                })
              }}
            />
          )}
        </View>
      )}

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
