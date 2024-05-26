import React from 'react';

function WelcomePage() {
  return (
  <>
    <header className="AppHeader">
      <h1>Welcome to greytHR Portal</h1>
      <p><a href="http://localhost:3004/auth/user/login">Login</a> or <a href="http://localhost:3004/auth/user/register">Register</a></p>
      <p>If Admin You Can Redirect To<br /><a href="http://localhost:3004/auth/admin/login">Admin Panel Login</a></p>
    </header>

  </>
  )
}

export default WelcomePage;