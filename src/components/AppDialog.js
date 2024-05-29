import { useCallback } from 'react'
import Dialog from 'react-native-dialog'

function AppDialog({
  children,
  onConfirm = () => '',
  cancelLabel = 'No',
  confirmLabel = 'Yes',
  onCancel = () => '',
  title = 'Title',
  subtitle = '',
}) {
  const [visible, setVisible] = useState(false)
  const close = useCallback(() => {
    setVisible(false)
  }, [])
  return (
    <>
      {children({ open: () => setVisible(true) })}
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>{title}</Dialog.Title>
          {subtitle && <Dialog.Description>{subtitle}</Dialog.Description>}
          <Dialog.Button
            testID="cancel_dialog_button"
            label={cancelLabel}
            onPress={() => {
              onCancel()
              close()
            }}
            style={{ color: 'red' }}
          />
          <Dialog.Button
            testID="confirm_dialog_button"
            label={confirmLabel}
            onPress={() => {
              onConfirm()
              close()
            }}
          />
        </Dialog.Container>
      </View>
    </>
  )
}

export default AppDialog
