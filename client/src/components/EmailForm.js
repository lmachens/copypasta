import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import { sendPastaViaMail } from '../api/pastes';
import Input from './Input';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-bottom: 10px;
`;

function EmailForm({ pasteId }) {
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    sendPastaViaMail(email, pasteId);
    setEmail('');
    alert('E-Mail sent 🐱‍🏍');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter the email of your recipient"
        value={email}
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button disabled={email.length === 0}>
        Send via Email{' '}
        <span role="img" aria-label="mail-emoji">
          📧
        </span>
      </Button>
    </Form>
  );
}

EmailForm.propTypes = {
  pasteId: PropTypes.string,
};

export default EmailForm;
