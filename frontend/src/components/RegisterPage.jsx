import React, { useState } from 'react';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the registration logic, such as sending the data to the server
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <>

      <div className="loginpage bg-gray-600 h-screen text-black font-semibold">
        <div className="register-form onSubmit={handleSubmit}">
          <h1 className='pt-20 text-3xl text-white'>Welcome to greytHR Portal</h1>
          <div className='flex flex-col mt-5  items-center'>
            <p className='text-xl text-orange-400'>Submit Your login Details</p>
            <div className="details mt-5">
              <h3>First Name</h3>
              <input className='p-2 rounded-md' type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                requiredplaceholder='John' />
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
              <button type='submit' className='btn border-1 rounded-full p-1 w-20 bg-orange-400 text-white'>Register</button>
              <div className='text-3xl text-white' >/</div>
              <button type='submit' href="/WelcomePage" className='btn border-1 rounded-full p-1 w-20 bg-blue-400 text-white'>Login ?</button>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default RegisterPage;