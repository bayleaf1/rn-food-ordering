export class NullUser {
  constructor(){
    this.profile= {
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
    this.profileMeta= {
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
    }
  }
  isValidToRenderApp() {
    return false
  }
  fName() {
    return this.profile.firstName
  }
  lName() {
    return this.profile.lastName
  }
  zipCode() {
    return this.profile.zipCode
  }
  address() {
    return this.profile.address
  }
  unit() {
    return this.profile.unit
  }
  email() {
    return this.profile.email
  }
  phone(){
     return this.profile.phone
  }
  isCompleted() {
    return this.profileMeta.isCompleted
  }
  isNotCompleted() {
    return !this.isCompleted()
  }
  usernameForTest() {
    return this.fName() + '_' + this.lName()
  }
  shortedUsername(){
    return trim(this.fName(), 12) + ' ' + trim(this.lName(), 1)
  }
}

export class User extends NullUser{
  constructor(data = new NullUser()) {
    super()
    this.profile =  data.profile
    this.profileMeta = data.profileMeta
  }

  isValidToRenderApp() {
    return true
  }
}




function trim(string, maxLength = 14) {
  if (typeof string !== 'string') return 'not a string'

  if (string.length <= maxLength) return string

  return string.slice(0, maxLength) + '.'
}