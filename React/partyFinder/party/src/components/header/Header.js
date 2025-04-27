import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6 shadow-lg rounded-b-2xl">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="/pf.jpg"    
          alt="Proyecto Integrador"
        />

  
        <p style={{ color: 'white', fontSize: '20px', marginBottom: '20px', textAlign: 'center' }}>
        </p>


        <ul style={{ color: 'white', listStyleType: 'disc', textAlign: 'center' }}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

      </div>
    </header>
  );
};

export default Header;
