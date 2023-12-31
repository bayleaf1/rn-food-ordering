const Routes = {
  overview: 'overview',
  login: {
    toString: () => 'home',
    register: 'register',
    resetPassword: 'Log',
  },
  home: {
    toString: () => 'home',
    settings: 'settings',
    store: {
        toString: () => 'store',
      singleItem: 'singleItem',
    },
  },
}

export default Routes


// export default Routes;

// function createPaths(routes) {
//   return stringify({}, routes)

//   function stringify(target, obj) {
//     let stringified = Object.keys(obj).reduce((acc, prop) => {
//       let value = obj[prop]
//       if (typeof value === 'string') acc[prop] = prop
//       else acc[prop] = stringify(new String(prop), value)
//       return acc
//     }, {})

//     Object.keys(stringified).forEach((prop) =>
//       Object.defineProperty(target, prop, { value: stringified[prop] })
//     )

//     return target
//   }
// }
