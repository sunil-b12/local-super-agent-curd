import React from 'react';
import SuperAgentState from './Component/Context/SuperAgentState';
import SuperAgent from './Component/SuperAgent/SuperAgent';

function App() {
  return (
    <SuperAgentState>
      <div className="App">
        <SuperAgent />
      </div>
    </SuperAgentState>
  );
}

export default App;
