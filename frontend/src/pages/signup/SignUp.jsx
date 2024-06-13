/* eslint-disable no-unused-vars */
import React from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [inputs, setInputs] = React.useState({
    fullName: 'Default Full Name',
    username: 'Default Username',
    password: 'Default Password',
    confirmPassword: 'Default Password',
    gender: 'Default Gender',
  });

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(inputs, null, 2));
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 p-10'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up <span className='text-blue-300'>ChatApp</span>
          </h1>
          <form onSubmit={handlesubmit}>
            <div>
              <label className='label p-2 '>
                <span className='text-white label-text my-3'>Full Name</span>
              </label>
              <input
                type='text'
                placeholder='Enter Full Name'
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
                className='w-full input input-bordered h-10 bg-white text-black'
              />
            </div>
            <div>
              <label className='label p-2 '>
                <span className='text-white label-text my-3'>Username</span>
              </label>
              <input
                type='text'
                placeholder='Enter Username'
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                className='w-full input input-bordered h-10 bg-white text-black'
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-white label-text my-3'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                className='w-full input input-bordered h-10 bg-white text-black'
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-white label-text my-3'>
                  Confirm Password
                </span>
              </label>
              <input
                type='password'
                placeholder='Confirm Password'
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                className='w-full input input-bordered h-10 bg-white text-black'
              />
            </div>
            <div className='mt-5'>
              <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} />
            </div>
            <div>
              <button className='btn btn-block btn-sm  text-white h-10 mt-5'>
                Sign Up
              </button>
            </div>
            {/* Gender Check Box goes here*/}
            <Link
              to={'/Login'}
              className='text-sm hover:underline hover:text-blue-200 inline-block my-3 text-white'
            >
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
