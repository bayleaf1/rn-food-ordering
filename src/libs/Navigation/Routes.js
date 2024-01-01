const Paths = {
  home: '/',
  singIn: '/sign-in',
  singUp: '/sign-up',
  //
  // overview: 'overview',
  // login: {
  //   toString: () => 'home',
  //   register: 'register',
  //   resetPassword: 'Log',
  // },
  // home: {
  //   toString: () => 'home',
  //   settings: 'settings',
  //   store: {
  //       toString: () => 'store',
  //     singleItem: 'singleItem',
  //   },
  // },
}

{/* <WayFinder to={Ways.singIn}></WayFinder> */}
{/* <PathFinder to={Paths.singIn}></PathFinder> */}
{/* <WheelMan to={Paths.singIn}></WheelMan> */}
{/* <Indicator to={Paths.singIn}></Indicator>
<Pointer to={Paths.singIn}></Pointer> */}

export default Paths


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
