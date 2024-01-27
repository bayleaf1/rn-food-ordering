import { View } from 'react-native'

function createGetter(Component) {
  return () => ({
    *[Symbol.iterator]() {
      while (true) {
        yield Component
      }
    },
  })
}
export const getViews = createGetter(View)
