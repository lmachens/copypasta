import React from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paste from "./pages/Paste";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/:pasteId" component={Paste} />
      </Router>
    </div>
  );
}

export default App;
