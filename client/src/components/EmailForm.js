import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import { sendPastaViaMail } from '../api/pastes';
import Input from './Input';

function EmailForm({ pasteId }) {
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    sendPastaViaMail(email, pasteId);
    setEmail('');
    alert('E-Mail sent 🐱‍🏍');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter the email of your recipient"
        value={email}
        type="email"
        onChange={event => setEmail(event.target.value)}
      />
      <Button disabled={email.length === 0}>Send via Email 📧</Button>
    </form>
  );
}

EmailForm.propTypes = {
  pasteId: PropTypes.string
};

export default EmailForm;
