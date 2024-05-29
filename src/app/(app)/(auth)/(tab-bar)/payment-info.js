import AppText from '@components/AppText/AppText'
import StripeCardField from '@components/Stripe/StripeCardField'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'

export default function PaymentInfoPage() {
  return (
    <SafeFullScreenLayout>
      <AppText ctw={cn('')} testID="payment_info_screen">
        Payment info
      </AppText>
      <StripeCardField/>
    </SafeFullScreenLayout>
  )
}
