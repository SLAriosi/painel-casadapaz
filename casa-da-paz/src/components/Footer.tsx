import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <div>
        <h4>Follow us</h4>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
      <div style={{ marginTop: '10px' }}>
        <h4>Menu</h4>
        <nav>
          <a href="/">Home</a> | 
          <a href="/about">About</a> | 
          <a href="/contact">Contact</a>
        </nav>
      </div>
      <div style={{ marginTop: '10px' }}>
        <p>Address: 1234 Example St, Fictional City</p>
      </div>
    </footer>
  );
};

export default Footer;
