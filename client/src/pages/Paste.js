import React from 'react';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import styled from '@emotion/styled';
import DateTime from '../components/DateTime';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import Author from '../components/Author';
import PropTypes from 'prop-types';
import SendEmailButton from '../components/EmailButton';
import Input from '../components/EmailInput';
import Approval from '../components/Approval';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function Paste({ match }) {
  const [inputValue, setInputValue] = React.useState('');
  const [{ paste, error, loading }, doGet] = useGetPaste(match.params.pasteId);
  const [approval, setApproval] = React.useState(false);

  function handleClickEvent() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.sendgrid.com/v3/mail/send`;

    const emailBody = {
      personalizations: [
        {
          to: [{ email: `${inputValue}`, name: 'John Doe' }],
          subject: 'Your pasta 🤪!'
        }
      ],
      content: [{ type: 'text/html', value: `${paste.value}` }],

      from: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍝' },
      reply_to: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍜' }
    };

    setApproval(true);

    return fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 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'
      },
      body: JSON.stringify(emailBody)
    });
  }

  return (
    <FullContainer>
      {loading && <Loading />}
      {error && (
        <>
          <Alert>
            <div>☠️☠️☠️</div>Can not get paste!
          </Alert>
          <Button onClick={doGet}>Try again</Button>
        </>
      )}
      {paste && (
        <>
          <CreatedAt date={new Date(paste.createdAt)}>
            {new Date(paste.createdAt).toDateString()}
          </CreatedAt>
          <Author name={paste.author} />
          <PasteArea>{paste.value}</PasteArea>
          <Input
            placeholder="Enter the email of your recipient"
            value={inputValue}
            type="email"
            onChange={event => setInputValue(event.target.value)}
          ></Input>
          <SendEmailButton onClick={handleClickEvent}></SendEmailButton>
          <div>{Approval(approval)}</div>
        </>
      )}
    </FullContainer>
  );
}

Paste.propTypes = {
  match: PropTypes.object
};

export default Paste;
