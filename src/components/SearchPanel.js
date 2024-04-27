import AppTextInput from "./FormRelated/AppTextInput";
import Icon from "./Pictures/Icon";
import Rhomb from "./Rhomb";

export default function SearchPanel() {
    return (
      <View
        tw="mt-4x flex flex-row"
        style={{
          columnGap: 20,
        }}
      >
        <AppTextInput
          placeholder={'Search food...'}
          inputViewTw={'bg-gray-50 h-12'}
          containerTw={'grow'}
          leftAddornment={
            <Icon
              name="search"
              ctw="ml-2 h-[25px] w-[25px]"
              iconElementTw="fill-gray-300 stroke-gray-300"
            />
          }
        />
  
        <Rhomb ctw="h-[50px]">
          <Icon name="filters" iconElementTw="pointer-events-none fill-white" />
        </Rhomb>
      </View>
    )
  }
  