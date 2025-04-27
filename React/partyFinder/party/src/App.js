import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header'; 
function App() {
    return (
        <Routes>
          <Route path="/inicio" element={<Header />} />
        </Routes>
    );
  }

  export default App;