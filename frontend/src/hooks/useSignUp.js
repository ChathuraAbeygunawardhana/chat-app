/* eslint-disable no-unused-vars */
import React from "react";
import toast from "react-hot-toast";

const useSignUp = () => {
  const [loading, setLoading] = React.useState(false);
  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(JSON.stringify(data));
      if (data.error) {
        throw new Error(data.error);
      }
      /* local storage */
      /* context */
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUp };
};

export default useSignUp;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill all the fields");
    return false;
  }

  if (password != confirmPassword) {
    toast.error(`Passwords don't match`);
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should be atleast 6 characters long");
    return false;
  }

  return true;
};
