import React from 'react';

export default function Header({ signedIn, onSignOut }) {
  const handleClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    borderBottom: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  };

  const appNameStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div>
        <a href="/" style={appNameStyle}>MyApp</a>
      </div>
      <div>
        <a
          href={signedIn ? '/' : '/login'}
          onClick={signedIn ? handleClick : undefined}
          style={buttonStyle}
        >
          {signedIn ? 'Logout' : 'Login'}
        </a>
      </div>
    </header>
  );
}
