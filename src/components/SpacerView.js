export default function SpacerView({ heightTw = '', ctw, style = {} }) {
  return <View tw={cn('h-4', heightTw, ctw)} style={style}></View>
}
SpacerView.createWithStyles = (height, width) => () => <SpacerView style={{ height, width }} />
//TODO copy on main repo
