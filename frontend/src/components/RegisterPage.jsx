import React, { useState } from 'react';

function RegisterPage() {
  const [username, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userimage, setUserImage] = useState(null); // Changed to null to handle file input correctly
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!firstName) newErrors.firstName = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!userimage) newErrors.userimage = 'User image is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    if (!age || isNaN(age) || age <= 0) newErrors.age = 'Valid Age is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('User Name:', username);
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('User Image:', userimage);
      console.log('User DOB:', dob);
      console.log('User Age:', age);
      console.log('Email:', email);
      console.log('Password:', password);
      // You can add more logic here if you want to handle the form submission further
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="loginpage bg-gray-600 h-screen text-black font-semibold">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className='pt-1 text-3xl text-white'>Welcome to greytHR Portal</h1>
          <div className='flex flex-col mt-2 items-center'>
            <p className='text-xl text-orange-400'>Submit Your login Details</p>
            <div className="details mt-2">
              <h3>Username</h3>
              <input
                className='p-1 rounded-md'
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder='abc321'
              />
              {errors.username && <p className="text-red-500">{errors.username}</p>}
              <h3>First Name</h3>
              <input
                className='p-1 rounded-md'
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder='John'
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              <h3 className='mt-2'>Last Name</h3>
              <input
                className='p-1 rounded-md'
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder='Doe'
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
              <h3>Image</h3>
              <input
                className='p-1 rounded-md'
                type="file"
                onChange={(e) => setUserImage(e.target.files[0])}
                required
              />
              {errors.userimage && <p className="text-red-500">{errors.userimage}</p>}
              <h3>Date Of Birth</h3>
              <input
                className='p-1 rounded-md'
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              {errors.dob && <p className="text-red-500">{errors.dob}</p>}
              <h3>Age</h3>
              <input
                className='p-1 rounded-md'
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                placeholder='age'
              />
              {errors.age && <p className="text-red-500">{errors.age}</p>}
              <h3 className='mt-2'>Email Address</h3>
              <input
                className='p-1 rounded-md'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='example@gmail.com'
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              <h3 className='mt-2'>Password</h3>
              <input
                className='p-1 rounded-md'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='ex. JOhn4856@#%$*'
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <div className="buttons mt-3 flex items-center">
              <button
                type='submit'
                value="Create User"
                className='btn border-1 rounded-full p-1 w-20 bg-orange-400 text-white'
              >
                Register
              </button>
              <div className='text-3xl text-white'>/</div>
              <a href="/LoginPage" className='btn border-1 rounded-full p-1 w-20 bg-blue-400 text-white text-center'>
                Login ?
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
