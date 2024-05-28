export const Screens = {
  '': () => '',
  'sign-in': () => '/',
  'sign-up': () => '/sign-up',
  'forgot-password': () => '/forgot-password',
  TOS: () => '/terms-of-use',
  privacyPolicy: () => '/privacy-policy',
  //
  home: () => '/home',
  user: () => '/user',
  'payment-info': () => '/payment-info',
  plans: (command = '') => {
    return '/plans'+ createQuery()

    function createQuery() {
      let query = ''
      if (command === 'after-payment') query = 'source=after-payment'
      return query ? '?' + query : ''
    }
  },
  order: (planId) => `/order/${planId}/payment`,
}
