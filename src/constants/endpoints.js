function tableEndpoint(segment) {
  return ({ page, pageSize, filterField, filterValue }) => {
    let params = new URLSearchParams({
      page,
      pageSize,
      filterField,
      filterValue,
    })

    params.forEach((value, key) => {
      if (value === '' || value === undefined || value === null) params.delete(key)
    })
    return `/api/${segment}/table?${params.toString()}`
  }
}

const endpoints = {
  userProfile: '/api/users/profile',
//   userProfileOverview: (id) => `/api/users/profile/` + id,
  updateUserProfile: `/api/users/profile/update`,
//   usersTable: tableEndpoint('users'),
//   //
//   // systemUsersTable: `/api/users/table`,
//   //
//   adminProfile: `/api/system-users/profile`,
//   //
  updatePassword: `/api/users/update-password`,
//   changePlan: `/api/users/change-subscription`,
//   //
//   contactUs: `/api/emails/contact-us`,
//   sendRequestDelivery: `/api/emails/delivery`,
//   //
//   paymentsTable: tableEndpoint('payments'),
//   getCheckoutPlanPage: (planId, returnUrl) =>
//     `/api/payments/stripe/checkout/subscription?planId=` + planId + '&returnUrl=' + returnUrl,
//   cancelCurrentPlanSubscriptionAsUser: `/api/payments/cancel-current-plan-subscription/as-user`,
//   cancelCurrentPlanSubscriptionAsAdmin: `/api/payments/cancel-current-plan-subscription/as-system-user`,
//   validatePromocode: `/api/payments/stripe/promocodes/validate`,
  subscriptions: `/api/payments/stripe/subscriptions`,
//   saveCard: `/api/payments/stripe/save-card`,
  // saveCardIntent: `/api/payments/stripe/save-card-intent`,
  saveCardAndCreateFBID: `/api/payments/stripe/save-card-and-create-fbid`,
  confirmPaymentWithMethod: '/api/payments/stripe/confirm-payment-with-method',
  //
//   checkAuthForUserDashboard: `/api/sessions/check-auth/user-dashboard`,
  registerWithEmail: `/api/sessions/register/user/email`,
  registerWithEmailAndLogin: `/api/sessions/register/user/email/and-login`,
  registerSystemUserWithEmail: `/api/sessions/register/system-user`,
  loginWithEmail: `/api/sessions/login/email`,
  loginSystemUser: `/api/sessions/login/system-user`,
  registerOrLoginWithGoogle: `/api/sessions/socials/google`,
  sendResetPassword: (email) => `/api/sessions/send-reset-password/by-email/` + email,
  verifyEmailAvailability: `/api/sessions/verify-email-availability`,
}

export default endpoints
