import React from 'react';
import styled from '@emotion/styled';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import PropTypes from 'prop-types';
import PasteBody from '../components/PasteBody';
import WarningButton from '../components/WarningButton';
import useDeletePaste from '../hooks/useDeletePaste';

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Paste({ match, embedded }) {
  const { pasteId } = match.params;
  const [oneTimeActive, doDelete] = useDeletePaste(pasteId);
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
        <Content>
          {!paste.oneTimeView && (
            <PasteBody paste={paste} embedded={embedded} />
          )}
          {paste.oneTimeView && (
            <>
              {!oneTimeActive && (
                <>
                  <label>You can see it only once. Are you ready?</label>
                  <WarningButton onClick={doDelete}>YES!!!</WarningButton>
                </>
              )}
              {oneTimeActive && (
                <PasteBody
                  paste={paste}
                  pasteId={pasteId}
                  embedded={embedded}
                  oneTimeActive={oneTimeActive}
                />
              )}
            </>
          )}
        </Content>
      )}
    </FullContainer>
  );
}

Paste.propTypes = {
  match: PropTypes.object,
  embedded: PropTypes.bool
};

export default Paste;
