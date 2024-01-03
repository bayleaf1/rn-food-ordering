import { Text } from 'react-native'
import { LayoutWithTopContent } from '../../../layouts/BaseLayout'
import Writing from '../../../components/Writing'
import Go from '../../../libs/Navigation/Go'
export default function Page() {
  return (
    <LayoutWithTopContent>
      <Text>Terms of use</Text>
      <Go toScreen={'drawerOne'}>
        <Writing>Go to drawer</Writing>
      </Go>
    </LayoutWithTopContent>
  )
}
