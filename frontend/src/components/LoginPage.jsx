import React, {useState} from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the login logic, such as sending the credentials to the server
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <>

      <div className="loginpage bg-gray-600 h-screen text-black font-semibold">
        
       <div className="login-form " onSubmit={handleSubmit}>
       <h1 className='pt-20 text-3xl text-white'>Welcome to greytHR Portal</h1>
       <div className='flex flex-col mt-5  items-center'>
          <p className='text-xl text-orange-400'>Submit Your login Details</p>
          <div className="details mt-5">
            
            <h3 className='mt-2'>Enter Your Username</h3>
            <input className='p-2 rounded-md' type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
            required id="" placeholder='Name or email' />
            <h3 className='mt-2'>Password</h3>
            <input className='p-2 rounded-md' type="password" value={password}  onChange={(e) => setPassword(e.target.value)} 
            required id="pass" placeholder='ex. JOhn4856@#%$*' />

          </div>
          <div className="buttons mt-5 flex gap-3">
            <button type='submit' className='btn border-1 rounded-full p-1 w-20 bg-orange-400 text-white'>Login</button>
            <div className='text-3xl text-white' >/</div>
            <button type='submit' href="/RegisterPage" className='btn border-1 rounded-full p-1 w-20 bg-blue-400 text-white'>Register ?</button>


          </div>

        </div>
       </div>

      </div>

    </>
  )
}

export default LoginPage;