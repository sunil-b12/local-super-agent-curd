import React from 'react';
import SuperAgentState from './Component/Context/SuperAgentState';
import SuperAgent from './Component/SuperAgent/SuperAgent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />

      <SuperAgentState>
        <div className="App">
          <SuperAgent />
        </div>
      </SuperAgentState>
    </>

  );
}

export default App;
