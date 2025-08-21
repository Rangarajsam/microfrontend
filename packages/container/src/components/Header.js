import React from 'react';

export default function Header({ isSignedIn, onSignOut }) {
  const handleClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  // const goToHome = () => {
  //   history.push("/");
  // }

  // const goToSignIn = () => {
  //   if(isSignedIn && onSignOut) {
  //     onSignOut();
  //   }
  //   if(!isSignedIn) {
  //     history.push('/auth/signin')
  //   }
  // }

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
          href={isSignedIn ? '/' : '/auth/signin'}
          onClick={isSignedIn ? handleClick : undefined}
          style={buttonStyle}
        >
          {isSignedIn ? 'Logout' : 'Login'}
        </a>
      </div>
    </header>
  );
}
