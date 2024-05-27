import React, { useState } from 'react';

function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userName,
      firstName,
      lastName,
      email,
      password
    };

    try {
      console.log('Request payload:', userData);
const response = await fetch('http://localhost:3004/auth/user/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
});

      if (response.ok) {
        console.log('Registration successful!');
        // Handle successful registration, such as redirecting to another page
      } else {
        console.error('Registration failed:', response.statusText);
        // Handle registration failure, display error message or retry registration
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle unexpected errors, display error message or retry registration
    }
  };

  return (
    <>
      <div className="loginpage bg-gray-600 h-screen text-black font-semibold">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className='pt-20 text-3xl text-white'>Welcome to greytHR Portal</h1>
          <div className='flex flex-col mt-5 items-center'>
            <p className='text-xl text-orange-400'>Submit Your login Details</p>
            <div className="details mt-5">
              <h3>User Name</h3>
              <input className='p-2 rounded-md' type="text" value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required placeholder='abc' />
              <h3>First Name</h3>
              <input className='p-2 rounded-md' type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required placeholder='John' />
              <h3 className='mt-2'>Last Name</h3>
              <input className='p-2 rounded-md' type="text" value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required placeholder='Doe' />
              <h3 className='mt-2'>Email Address</h3>
              <input className='p-2 rounded-md' type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                required placeholder='example@gmail.com' />
              <h3 className='mt-2'>Password</h3>
              <input className='p-2 rounded-md' type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required placeholder='ex. JOhn4856@#%$*' />
            </div>
            <div className="buttons mt-5 flex gap-3">
              <button type='submit' value="Create User" className='btn border-1 rounded-full p-1 w-20 bg-orange-400 text-white'>Register</button>
              <div className='text-3xl text-white'>/</div>
              <a href="/LoginPage" className='btn border-1 rounded-full p-1 w-20 bg-blue-400 text-white text-center'>Login ?</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
