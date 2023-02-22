import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
import Bgvisual1200 from './components/Bg_Visual';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TestPage from './pages/TestPage';
// import MainComponent from './components/MainComponent';

// import Sample from './components';

function App() {
  return (

    <Router>
      <div className="App">
        <TopNav />
          <Switch>
            <Route path="/" exact>
              <Bgvisual1200 />
            </Route>
            <Route path="/testPage" exact>
              {/* <TestPage /> */}
            </Route>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
