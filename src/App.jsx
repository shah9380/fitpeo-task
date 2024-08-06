import React from 'react';
import SidebarComponent from './components/sidebar/SidebarComponent';
import Header from './components/header/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <BrowserRouter>
    <div className="App flex relative w-screen">
      <SidebarComponent />
      <div className="content max-h-screen overflow-y-auto w-full">
        <Header />
        <Routes>
          <Route path='/' Component={DashBoard} />
          <Route path='/dashboard' Component={DashBoard}/>
          <Route path='*' Component={DashBoard} />
        </Routes>
        {/* Your main content goes here */}
        <h1>Welcome to the Dashboard</h1>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
