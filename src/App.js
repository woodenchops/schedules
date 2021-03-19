import React from 'react';
import './App.css';
import Container from './components/Container';
import {ScheduleProvider} from './context/ScheduleContext'

function App() {
  return (
    <div className="App">
        <ScheduleProvider>
            <Container/>
        </ScheduleProvider>
    </div>
  );
}

export default App;
