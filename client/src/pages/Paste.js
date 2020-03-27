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
import ReportButton from '../components/ReportButton';
import { postPasteToSlack } from '../api/pastes';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function Paste({ match }) {
  const [{ paste, error, loading }, doGet] = useGetPaste(match.params.pasteId);

  function handleReport() {
    const reportIcon = '🚨REPORT🚨';
    const pasteLink = `${window.location.origin}/${paste._id}`;

    const slackReport = {
      text: `${reportIcon} \n===\n${paste.author}: \n"${paste.value}"\n=== \nID: ${paste._id} \n${pasteLink} \n${reportIcon}`
    };

    alert('Report 🚨');
    postPasteToSlack(slackReport);
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
          <ReportButton onClick={handleReport}>Report that shit!</ReportButton>
        </>
      )}
    </FullContainer>
  );
}

Paste.propTypes = {
  match: PropTypes.object
};

export default Paste;
