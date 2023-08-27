import { useRef, useState } from "react";
import { LoginPageIcon } from "../src/svg/index";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import _ from "lodash";
import * as URLHelpers from "../src/helpers/URLHelpers";

const Register = () => {
  const { backendURL } = URLHelpers;

  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const username = formData.get("username");
    const password = formData.get("password");

    const inputData = {
      username,
      password,
    };

    try {
      const { data, status } = await axios.post(
        `${backendURL}/user/register`,
        inputData
      );
      if (status == 200 || status == 201) {
        navigate("/login");
      }
      console.log("data", data);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <div className="px-4">
      <img src={LoginPageIcon} />
      <form className="mb-20" ref={formRef} onSubmit={handleFormSubmit}>
        <input
          name="username"
          id="username"
          className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 w-full p-2.5"
          placeholder="Enter new username"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter new password"
          className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 w-full p-2.5"
          required
        />
        <button
          type="submit"
          className="flex items-center gap-x-2 mx-auto text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm w-full justify-center px-5 py-2.5 text-center"
        >
          Create Account
          <LogIn />
        </button>
      </form>
      <div className="border-t-2">
        <p className="mb-6 -mt-3.5 text-center">
          <span className="bg-white">
            &nbsp;&nbsp;Already have account? Login&nbsp;&nbsp;
          </span>
        </p>
        <Link to="/login">
          <button
            type="submit"
            className="flex items-center gap-x-2 mx-auto text-white bg-primary-500 hover:bg-primary-800 font-medium rounded-lg text-sm w-full justify-center px-5 py-2.5 text-center"
          >
            Login Account
            <LogIn />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
