const Routes = {
  singIn: '/',
  singUp: '/sign-up',
  passwordReset: '/password-reset',
  TOS: '/terms-of-use',
  privacyPolicy: '/privacy-policy',
  //
  home: '/home',
  settings: '/settings'
}

{/* <WayFinder to={Ways.singIn}></WayFinder> */}
{/* <PathFinder to={Paths.singIn}></PathFinder> */}
{/* <WheelMan to={Paths.singIn}></WheelMan> */}
{/* <Indicator to={Paths.singIn}></Indicator>
<Pointer to={Paths.singIn}></Pointer> */}

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
