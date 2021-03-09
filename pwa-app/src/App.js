import React from 'react';

import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <h1>A Sample Tiktok Application to play videos</h1>
      <div className='app__video'>
        <Video url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' channel='@shoaib' description='Be Humble' song='AR-Rehman' />
        <Video url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' channel='@salman' description='Be polite' song='Yaseen' />


      </div>

    </div>
  );
}

export default App;
