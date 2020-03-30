import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import DateTime from './DateTime';
import Author from './Author';
import PastaPoints from '../components/PastaPoints';
import EmbedButton from '../components/EmbedButton';
import SendEmailButton from '../components/EmailButton';
// import Approval from '../components/Approval';
import EmailInput from '../components/EmailInput';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function PasteBody({ paste, pasteId, embedded, oneTimeActive }) {
  return (
    <>
      <CreatedAt date={new Date(paste.createdAt)}>
        {new Date(paste.createdAt).toDateString()}
      </CreatedAt>
      <Author name={paste.author} />
      {!oneTimeActive && (
        <PastaPoints pastaPoints={paste.pastaPoints} pasteId={pasteId} />
      )}
      <PasteArea>{paste.value}</PasteArea>
      {!embedded && paste.isEmbeddable && <EmbedButton pasteId={pasteId} />}
      <EmailInput
      // placeholder="Enter the email of your recipient"
      // value={mailInputValue}
      // type="email"
      // onChange={event => setMailInputValue(event.target.value)}
      ></EmailInput>
      <SendEmailButton></SendEmailButton>
      {/* <div>{Approval(approval)}</div> */}
    </>
  );
}

PasteBody.propTypes = {
  paste: PropTypes.object,
  pasteId: PropTypes.string,
  embedded: PropTypes.bool,
  oneTimeActive: PropTypes.bool
};

export default PasteBody;
