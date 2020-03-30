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
import EmailInput from '../components/EmailInput';
import Approval from '../components/Approval';
import { postEmail } from '../api/pastes';
import PastaPoints from '../components/PastaPoints';

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
  const { pasteId } = match.params;
  const [{ paste, error, loading }, doGet] = useGetPaste(pasteId);


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

    postEmail(api, emailBody);
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
          <PastaPoints pastaPoints={paste.pastaPoints} pasteId={pasteId} />
          <PasteArea>{paste.value}</PasteArea>

          <form>
            <FullContainer>
              <EmailInput
                placeholder="Enter the email of your recipient"
                value={inputValue}
                type="email"
                onChange={event => setInputValue(event.target.value)}
              ></EmailInput>
              <SendEmailButton onClick={handleClickEvent}></SendEmailButton>
            </FullContainer>
          </form>

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
