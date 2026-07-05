import React, { useState } from 'react';
import Header from './components/Header/Header';
import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PortfolioForm />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <PortfolioForm />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;