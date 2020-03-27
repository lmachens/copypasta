import React from 'react';
import Button from './Button';
import Alert from './Alert';

export default function EmbedButton(props) {
  const [embedCodeCopied, setEmbedCodeCopied] = React.useState(false);
  function handleEmbedButtonClick() {
    setEmbedCodeCopied(true);

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
