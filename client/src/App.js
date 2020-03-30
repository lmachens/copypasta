import React from 'react';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paste from './pages/Paste';
import Confirmation from './components/Confirmation';
import EmbedPaste from './pages/EmbedPaste';
import { copyToClipboard } from './utils/clipboard';

function copyPasteURL(pasteId) {
  const pasteURL = `${window.location.origin}/${pasteId}`;
  copyToClipboard(pasteURL);
}

function App() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  function onPaste(pasteId) {
    copyPasteURL(pasteId);
    setShowConfirmation(true);
  }

  return (
    <div className="App">
      <GlobalStyles />
      {showConfirmation && (
        <Confirmation>
          <div>🎉🎉🎉</div>URL copied to your clipboard!
        </Confirmation>
      )}
      <Router>
        <Route exact path="/" component={() => <Home onPaste={onPaste} />} />
        <Route exact path="/:pasteId" component={Paste} />
        <Route exact path="/embed/:pasteId" component={EmbedPaste} />
      </Router>
    </div>
  );
}

export default App;
