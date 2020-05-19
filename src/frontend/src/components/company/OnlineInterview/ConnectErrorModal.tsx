import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ConnectErrorModal: React.FC = () => {
  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>接続エラー</DialogTitle>
      <DialogContent>
        <DialogContentText>
          接続に失敗しました。再度お試しください。
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default ConnectErrorModal
