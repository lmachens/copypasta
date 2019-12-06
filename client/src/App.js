import React from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paste from "./pages/Paste";
import Confirmation from "./components/Confirmation";

function App() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  function isPasteCreator() {
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
        <Route
          exact
          path="/"
          component={() => <Home isPasteCreator={isPasteCreator} />}
        />
        <Route path="/:pasteId" component={Paste} />
      </Router>
    </div>
  );
}

export default App;
