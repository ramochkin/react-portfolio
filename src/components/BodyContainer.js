import React, { useState } from 'react';
import NavbarEl from './Navbar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About'

export default function BodyContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'work') {
      return <Projects />;
    }
    return "<Home />";
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavbarEl currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
