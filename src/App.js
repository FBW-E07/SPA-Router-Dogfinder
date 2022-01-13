import React from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="App">
      <h1>Helloz. We have dogz. Click on them for more info.</h1>
      <Routes>
        {/* Render the Dogs component for all the dogs */}
        <Route path="dogs" element={<Dogs />}>
          {/* Render the Dogs component for a specific dog */}
          <Route path=":name" element={<Dogs />}/>
        </Route>
        <Route path="*" element={<Navigate replace to="/dogs" />} />
      </Routes>
    </div>
  );
}

export default App;