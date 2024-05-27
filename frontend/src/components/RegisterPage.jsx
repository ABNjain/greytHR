import React, { useState } from 'react';

function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userimage, setUserImage] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};
    let valid = true;

    if (!userName) {
      valid = false;
      formErrors['userName'] = 'User name is required';
    }

    if (!firstName) {
      valid = false;
      formErrors['firstName'] = 'First name is required';
    }

    if (!lastName) {
      valid = false;
      formErrors['lastName'] = 'Last name is required';
    }

    if (!userimage) {
      valid = false;
      formErrors['userimage'] = 'User image is required';
    }

    if (!dob) {
      valid = false;
      formErrors['dob'] = 'Date of birth is required';
    }

    if (!age || isNaN(age) || age <= 0) {
      valid = false;
      formErrors['age'] = 'Valid age is required';
    }

    if (!email) {
      valid = false;
      formErrors['email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      formErrors['email'] = 'Email address is invalid';
    }

    if (!password) {
      valid = false;
      formErrors['password'] = 'Password is required';
    } else if (password.length < 8) {
      valid = false;
      formErrors['password'] = 'Password must be at least 8 characters long';
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const userData = {
      userName,
      firstName,
      lastName,
      userimage,
      dob,
      age,
      email,
      password
    };

    try {
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
          <h1 className='pt-2 text-3xl text-white'>Welcome to greytHR Portal</h1>
          <div className='flex flex-col mt-2 items-center'>
            <p className='text-xl text-orange-400'>Submit Your login Details</p>
            <div className="details mt-2">
              <h3>User Name</h3>
              <input className='p-1 rounded-md' type="text" value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required placeholder='abc' />
              {errors.userName && <span className='text-red-500'>{errors.userName}</span>}
              <h3>First Name</h3>
              <input className='p-1 rounded-md' type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required placeholder='John' />
              {errors.firstName && <span className='text-red-500'>{errors.firstName}</span>}
              <h3 className='mt-2'>Last Name</h3>
              <input className='p-1 rounded-md' type="text" value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required placeholder='Doe' />
              {errors.lastName && <span className='text-red-500'>{errors.lastName}</span>}
              <h3 className='mt-2'>Photo</h3>
              <input className='p-1 rounded-md' type="file" value={userimage}
                onChange={(e) => setUserImage(e.target.value)}
                required placeholder='file.jpg' />
              {errors.userimage && <span className='text-red-500'>{errors.userimage}</span>}
              <h3 className='mt-2'>Date Of Birth</h3>
              <input className='p-1 rounded-md' type="date" value={dob}
                onChange={(e) => setDob(e.target.value)}
                required placeholder='__/__/____' />
              {errors.dob && <span className='text-red-500'>{errors.dob}</span>}
              <h3 className='mt-2'>Age</h3>
              <input className='p-1 rounded-md' type="number" value={age}
                onChange={(e) => setAge(e.target.value)}
                required placeholder='age' />
              {errors.age && <span className='text-red-500'>{errors.age}</span>}
              <h3 className='mt-2'>Email Address</h3>
              <input className='p-1 rounded-md' type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                required placeholder='example@gmail.com' />
              {errors.email && <span className='text-red-500'>{errors.email}</span>}
              <h3 className='mt-2'>Password</h3>
              <input className='p-1 rounded-md' type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required placeholder='ex. JOhn4856@#%$*' />
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
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
