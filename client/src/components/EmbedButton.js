import React from 'react';
import Button from './Button';
import Confirmation from './notifications/Confirmation';
import PropTypes from 'prop-types';
import { copyToClipboard } from '../utils/clipboard';

function EmbedButton(props) {
  const [embedCodeCopied, setEmbedCodeCopied] = React.useState(false);

  function handleEmbedButtonClick() {
    setEmbedCodeCopied(true);
    const iframeCode = `<iframe src="${window.location.origin}/embed/${props.pasteId}"/>`;
    copyToClipboard(iframeCode);
  }

  return (
    <>
      {embedCodeCopied && (
        <Confirmation>Copied Embed Code to your Clipboard!</Confirmation>
      )}
      <Button {...props} onClick={handleEmbedButtonClick}>
        Copy Embed Code
      </Button>
    </>
  );
}

EmbedButton.propTypes = {
  pasteId: PropTypes.string,
};

export default EmbedButton;
