import React from 'react';
import Confirmation from './Confirmation';

function Approval(approved) {
  if (approved === true) {
    return <Confirmation>Email Successfully Sent 🎁</Confirmation>;
  }
}

export default Approval;
