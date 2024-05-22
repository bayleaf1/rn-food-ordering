export const UserManager = {
  nullUser() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        address: '',
        zipCode: '',
        email: '',
        unit: '',
        phone: '',
        fishboxCellNumber: '',
        plan: {
          id: 0,
          name: 'Lite plan',
        },
        
      },
      profileMeta: {
        hasPlan: false,
        hasCustomPlan: false,
        isCompleted: false,
        doNotAllowToChangeEmail: false,
        doNotAllowToChangePassword: false,
        termsAgreed: false,
        enabled: true,
        dateForNextChargeOfPlanSubscription: '1970-01-01',
        canChangeSubscription: false,
        canCancelSubscription: false,
        hasFishboxCellNumber: false,
      },
      isNullUser: true
    }
  },
  isNullUser(u){return u.isNullUser},
  isCompleted(u){
    return u.profileMeta.isCompleted
  },
  isNotCompleted(u){
    return !u.profileMeta.isCompleted
  },

  planName(user) {
    return this.get(user, 'plan.name', '')
  },
  planId(user) {
    return this.get(user, 'plan.id', -1)
  },
  fullNameWithElipsis(user) {
    return this.trim(user.firstName) + ' ' + this.trim(user.lastName)
  },
  firstNameLetterUppercased(user) {
    return user.firstName.slice(0, 1).toUpperCase()
  },
  fullFirstNameAndFirstLetterFromLastName(user) {
    return this.trim(user.profile.firstName, 12) + ' ' + user.profile.lastName.slice(0, 1) + '.'
  },
  trim(string, maxLength = 14) {
    if (typeof string !== 'string') return 'not a string'

    if (string.length <= maxLength) return string

    return string.slice(0, maxLength) + '.'
  },

  get(user, fieldName, defValue = '') {
    return this._get(user.profile, fieldName, defValue)
  },
  _get(obj, path, defValue) {
    // WARNING: This is not a drop in replacement solution and
    // it might not work for some edge cases. Test your code!
    // If path is not defined or it has false value
    if (!path) return undefined
    // Check if path is string or array. Regex : ensure that we do not have '.' and brackets.
    // Regex explained: https://regexr.com/58j0k
    const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)
    // Find value
    const result = pathArray.reduce((prevObj, key) => prevObj && prevObj[key], obj)
    // If found value is undefined return default value; otherwise return the value
    return result === undefined ? defValue : result
  },
}
