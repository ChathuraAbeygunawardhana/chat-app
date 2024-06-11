/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const GenderCheckBox = () => {
  const [gender, setGender] = useState('');

  return (
    <div className='flex flex-row space-x-4'>
      <label className='flex items-center space-x-3'>
        <input
          type='radio'
          className='form-radio h-5 w-5 text-blue-600'
          checked={gender === 'male'}
          onChange={() => setGender('male')}
        />
        <span className='text-white'>Male</span>
      </label>
      <label className='flex items-center space-x-3'>
        <input
          type='radio'
          className='form-radio h-5 w-5 text-blue-600'
          checked={gender === 'female'}
          onChange={() => setGender('female')}
        />
        <span className='text-white'>Female</span>
      </label>
    </div>
  );
};

export default GenderCheckBox;
