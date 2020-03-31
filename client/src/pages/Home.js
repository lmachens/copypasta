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
import PasswordInput from '../components/PasswordInput';
import SelectOneTime from '../components/SelectOneTime';
import EmbedCheck from '../components/EmbedCheck';

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
  const [isEncrypted, setIsEncrypted] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [oneTimeView, setOneTimeView] = React.useState(false);
  const [isEmbeddable, setIsEmbeddable] = React.useState(true);

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
      <EncryptCheckbox
        value={isEncrypted}
        onChange={() => setIsEncrypted(!isEncrypted)}
      />
      <PasswordInput
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <SelectOneTime
        disabled={isEmbeddable}
        checked={oneTimeView}
        onChange={() => setOneTimeView(!oneTimeView)}
      />
      <EmbedCheck
        disabled={oneTimeView}
        checked={isEmbeddable}
        onChange={event => setIsEmbeddable(event.target.checked)}
      />
      <SubmitButton
        onClick={() =>
          doPost({
            oneTimeView,
            isEmbeddable,
            value: pasteValue,
            author,
            expireTime,
            password,
            isEncrypted
          })
        }
        disabled={
          !pasteValue || !author || loading || (!password && isEncrypted)
        }
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
