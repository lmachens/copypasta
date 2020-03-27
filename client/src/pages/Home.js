import React from 'react';
import Logo from '../icons/Logo';
import PasteArea from '../components/PasteArea';
import styled from '@emotion/styled';
import SubmitButton from '../components/SubmitButton';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import { Redirect, useHistory } from 'react-router-dom';
import FullContainer from '../components/FullContainer';
import usePostPaste from '../hooks/usePostPaste';
import RandomButton from '../components/RandomButton';
import { getRandomPaste } from '../api/pastes';
import AuthorInput from '../components/AuthorInput';
import SelectTime from '../components/SelectTime';
import PropTypes from 'prop-types';
import EncryptCheckbox from '../components/EncryptCheckbox';
import PasswordInput from '../components/EncryptInput';

const PasteAreaStyled = styled(PasteArea)`
  margin: 20px;
`;

const RandomButtonStyled = styled(RandomButton)`
  margin-top: 12px;
`;

function Home({ onPaste }) {
  const [pasteValue, setPasteValue] = React.useState('');
  const [{ pasteId, error, loading }, doPost] = usePostPaste();
  const [author, setAuthor] = React.useState('');
  const [expireTime, setExpireTime] = React.useState(-1);
  // 2 states checkbox und password input

  React.useEffect(() => {
    if (pasteId) {
      onPaste(pasteId);
    }
  }, [pasteId]);

  const history = useHistory();

  async function handleRandomClick() {
    const paste = await getRandomPaste();
    history.push(`/${paste._id}`);
  }

  if (pasteId) return <Redirect to={`/${pasteId}`} />;

  return (
    <FullContainer>
      <Logo />
      <AuthorInput
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <PasteAreaStyled
        value={pasteValue}
        onChange={event => setPasteValue(event.target.value)}
      />
      <SelectTime
        value={expireTime}
        onChange={event => setExpireTime(parseInt(event.target.value))}
      ></SelectTime>

      <EncryptCheckbox />
      <PasswordInput />

      <SubmitButton
        onClick={() => doPost({ value: pasteValue, author, expireTime })}
        disabled={!pasteValue || !author || loading}
      />
      <RandomButtonStyled onClick={handleRandomClick} />
      {loading && <Loading />}
      {error && (
        <Alert>
          <div>☠️☠️☠️</div>Can not post paste! Please try again.
        </Alert>
      )}
    </FullContainer>
  );
}

Home.propTypes = {
  onPaste: PropTypes.func
};

export default Home;
