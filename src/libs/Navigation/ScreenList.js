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
  plans: () => '/plans',
  payment: (planId) => '/payment/' + planId,
}
