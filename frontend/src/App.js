import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/TopNav';
import Bg_visual_1200 from './components/Bg_Visual';
// import MainComponent from './components/MainComponent';

// import Sample from './components';

function App() {
  return (
    <div className="App">
      {/* <Sample /> */}
      {/* <MainComponent /> */}
      <TopNav />
      <Bg_visual_1200 />
    </div>
  );
}

export default App;
