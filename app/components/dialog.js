import { Component } from 'cerebral-snabbdom';
import Example from './example';
import { Button, Dialog } from '../../lib';

export default Component({
  dialog: ['demos', 'dialog']
}, ({
  state: {
    dialog
  },
  signals
}) => (
  <div>
    <Example code={`
import { Dialog } from 'snabbdom-material';
    `}/>
    <Example code={`
<Dialog
  isOpen={showDialog}
  width={400}
  height={172}
  title="Question?"
  okLabel="OK"
  onOk={onOk}
  cancelLabel="Cancel"
  onCancel={onCancel}>
</Dialog>
    `}/>
    <Button style={{ margin: '24px 0' }} primary onClick={() => signals.dialogOpened()}>Show Dialog</Button>
    <Dialog
      isOpen={dialog.showDialog}
      width={400}
      height={172}
      title="Do you confirm or deny?"
      okLabel="Confirm"
      onOk={() => signals.dialogClosed()}
      cancelLabel="Deny"
      onCancel={() => signals.dialogClosed()}>
      the details of allogation
    </Dialog>
  </div>
));
