import React from 'react';
import Button from './Button';
import Confirmation from './Confirmation';
import PropTypes from 'prop-types';

export default function EmbedButton(props) {
  const [embedCodeCopied, setEmbedCodeCopied] = React.useState(false);
  function handleEmbedButtonClick() {
    setEmbedCodeCopied(true);
    const iFrame = `<iframe src="${window.location.origin}/embed/${props.pasteId}"/>`;
    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = iFrame;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    return;
  }
  return (
    <>
      {embedCodeCopied && (
        <Confirmation>Copied Embed Code to your Clipboard!</Confirmation>
      )}
      <Button {...props} onClick={() => handleEmbedButtonClick()}>
        Copy Embed Code
      </Button>
    </>
  );
}

EmbedButton.propTypes = {
  pasteId: PropTypes.string
};
