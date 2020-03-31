import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import DateTime from './DateTime';
import Author from './Author';
import PastaPoints from '../components/PastaPoints';
import EmbedButton from '../components/EmbedButton';
import EmailForm from '../components/EmailForm';
import { reportPaste } from '../api/pastes';
import ReportButton from '../components/ReportButton';
import PasswordInput from '../components/PasswordInput';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function PasteBody({ paste, embedded, oneTimeActive }) {
  const [password, setPassword] = React.useState('');

  function handleReport() {
    reportPaste(paste._id);

    alert('Reported 🚨');
  }

  return (
    <>
      <CreatedAt date={new Date(paste.createdAt)}>
        {new Date(paste.createdAt).toDateString()}
      </CreatedAt>
      <Author name={paste.author} />
      {!oneTimeActive && (
        <PastaPoints pastaPoints={paste.pastaPoints} pasteId={paste._id} />
      )}
      <PasteArea>{paste.value}</PasteArea>
      <PasswordInput
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <EmailForm pasteId={paste._id} />
      <ReportButton onClick={handleReport}>Report that shit!</ReportButton>
      {!embedded && paste.isEmbeddable && <EmbedButton pasteId={paste._id} />}
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
