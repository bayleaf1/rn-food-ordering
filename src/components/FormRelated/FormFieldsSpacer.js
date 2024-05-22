import SpacerView  from "@components/SpacerView"
import { wp } from "@libs/Styling"

function FormFieldsSpacer ( {height = 4} ) {
let Spacer = SpacerView.createWithStyles(wp(height))
return  <Spacer/>
}
export default FormFieldsSpacer