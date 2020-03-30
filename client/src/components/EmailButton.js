import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import { sendPastaViaMail } from '../api/pastes';
import EmailInput from './EmailInput';

export default function SendEmailButton(props) {
  const [mailInputValue, setMailInputValue] = React.useState('');
  // const [approval, setApproval] = React.useState(false);

  function handleMailButtonClick() {
    sendPastaViaMail(mailInputValue);
  }

  return (
    <form>
      <EmailInput
        placeholder="Enter the email of your recipient"
        value={mailInputValue}
        type="email"
        onChange={event => setMailInputValue(event.target.value)}
      ></EmailInput>
      <Button {...props} onClick={handleMailButtonClick}>
        Send via Email 📧
      </Button>
    </form>
  );
}

SendEmailButton.propTypes = {
  mailInputValue: PropTypes.string
};
