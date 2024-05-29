import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationError, setValidationError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation error
    setValidationError('');

    // Validate email and password
    if (!validateEmail(email)) {
      setValidationError('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setValidationError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3004/auth/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful', data);
      // Save the token in localStorage
      localStorage.setItem('token', data.token);

      // Handle successful login, e.g., redirecting to another page
      // window.location.href = '/dashboard'; // Example redirect
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="loginpage bg-gray-600 h-screen text-black font-semibold">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="pt-20 text-3xl text-white">Welcome to greytHR Portal</h1>
        <div className="flex flex-col mt-5 items-center">
          <p className="text-xl text-orange-400">Submit Your login Details</p>
          <div className="details mt-5">
            <h3 className="mt-2">Enter Your Email</h3>
            <input
              className="p-2 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Name or email"
            />
            <h3 className="mt-2">Password</h3>
            <input
              className="p-2 rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="ex. JOhn4856@#%$*"
            />
          </div>
          {validationError && <div className="text-red-500 mt-2">{validationError}</div>}
          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
          <div className="buttons mt-5 flex gap-3">
            <button type="submit" className="btn border-1 rounded-full p-1 w-20 bg-orange-400 text-white">
              Login
            </button>
            <div className="text-3xl text-white">/</div>
            <a href="/LoginPage" className="btn border-1 rounded-full p-1 w-20 bg-blue-400 text-white text-center">
              Register ?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
