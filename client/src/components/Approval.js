import React from 'react';
import Confirmation from './Confirmation';

function Approval(approved) {
  //   const [approval, setApproval] = React.useState(false);
  //   React.useEffect(() => {
  //     setApproval(true);
  //   });
  if (approved === true) {
    return <Confirmation>Email Successfully Sent 🎁</Confirmation>;
  }
}

export default Approval;
