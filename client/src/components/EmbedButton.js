import React from 'react';
import Button from './Button';
import Alert from './Alert';
import PropTypes from 'prop-types';

export default function EmbedButton(props) {
  const [embedCodeCopied, setEmbedCodeCopied] = React.useState(false);
  function handleEmbedButtonClick() {
    setEmbedCodeCopied(true);
    const iFrame = `<iframe src="${window.location.origin}/embed/${props.pasteId}"/>`;
    console.log(iFrame);

    return;
  }
  return (
    <>
      {embedCodeCopied && <Alert>Copied Embed Code to your Clipboard!</Alert>}
      <Button {...props} onClick={() => handleEmbedButtonClick()}>
        Copy Embed Code
      </Button>
    </>
  );
}

EmbedButton.propTypes = {
  pasteId: PropTypes.string
};
