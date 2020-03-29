import React from 'react';
import Alert from './Alert';

function Approval(approved) {
  //   const [approval, setApproval] = React.useState(false);
  //   React.useEffect(() => {
  //     setApproval(true);
  //   });
  if (approved === true) {
    return <Alert>Email Successfully Sent 🎁</Alert>;
  } else {
    return;
  }
}

export default Approval;
