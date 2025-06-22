/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  const handleGenderChange = (newGender) => {
    onCheckBoxChange(newGender);
  };

  return (
    <div className="flex flex-row space-x-4">
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-blue-600"
          checked={selectedGender === 'male'}
          onChange={() => handleGenderChange('male')}
        />
        <span className="text-white">Male</span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="radio"
          className="form-radio h-5 w-5 text-blue-600"
          checked={selectedGender === 'female'}
          onChange={() => handleGenderChange('female')}
        />
        <span className="text-white">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckBox;
