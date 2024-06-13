/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 p-10'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Login <span className='text-blue-300'>ChatApp</span>
          </h1>
          <form>
            <div>
              <label className='label p-2 '>
                <span className='text-white label-text my-3'>Username</span>
              </label>
              <input
                type='text'
                placeholder='Enter Username'
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
                className='w-full input input-bordered h-10 bg-white text-black'
              />
            </div>
            <Link
              to='/SignUp'
              className='text-sm hover:underline hover:text-blue-200 inline-block my-3 text-white'
            >
              {"Don't"} have an account?
            </Link>
            <div>
              <button className='btn btn-block btn-sm mt-2 text-white h-10'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
