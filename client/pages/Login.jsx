import React, { useRef, useState } from "react";
import { LoginPageIcon } from "../src/svg/index";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formRef?.current;

    setForm((form) => {
      return {
        ...form,
        [email.name]: email.value,
      };
    });
    setForm((form) => {
      return {
        ...form,
        [password.name]: password.value,
      };
    });
  };

  return (
    <div className="px-4">
      <img src={LoginPageIcon} />
      <form className="mb-20" ref={formRef} onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 w-full p-2.5"
          placeholder="Your email"
          required
        />
        <div className="flex ">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-x-2 mx-auto text-white bg-primary-500 hover:bg-primary-800 font-medium rounded-lg text-sm w-full justify-center px-5 py-2.5 text-center"
        >
          Login Account
          <LogIn />
        </button>
      </form>

      <div className="border-t-2">
        <p className="mb-6 -mt-3.5 text-center">
          <span className="bg-white">
            &nbsp;&nbsp;Don't have account? Register&nbsp;&nbsp;
          </span>
        </p>
        <Link to="/register">
          <button
            type="submit"
            className="flex items-center gap-x-2 mx-auto text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm w-full justify-center px-5 py-2.5 text-center"
          >
            Register Account
            <LogIn />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
