import React from 'react';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Paste from './pages/Paste';
import Confirmation from './components/notifications/Confirmation';
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
    <div>
      <GlobalStyles />
      {showConfirmation && (
        <Confirmation>URL copied to your clipboard!</Confirmation>
      )}
      <Router>
        <Route exact path="/">
          <Home onPaste={onPaste} />
        </Route>
        <Route exact path="/:pasteId">
          <Paste />
        </Route>
        <Route exact path="/embed/:pasteId">
          <Paste embedded />
        </Route>
      </Router>
    </div>
  );
}

export default App;
