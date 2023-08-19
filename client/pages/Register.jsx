import React, { useRef, useState } from "react";
import { LoginPageIcon } from "../src/svg/index";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
  });

  const formRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formRef?.current;

    setForm((prev) => {
      return {
        ...prev,
        [name.name]: name.value,
      };
    });
    setForm((prev) => {
      return {
        ...prev,
        [email.name]: email.value,
      };
    });
    setForm((prev) => {
      return {
        ...prev,
        [password.name]: password.value,
      };
    });
  };

  return (
    <div className="px-4">
      <img src={LoginPageIcon} />
      <form className="mb-20" ref={formRef} onSubmit={handleFormSubmit}>
        <input
          //   ref={nameRef}
          type="name"
          name="name"
          id="name"
          className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 w-full p-2.5"
          placeholder="Your name"
          required
        />
        <input
          //   ref={emailRef}
          type="email"
          name="email"
          id="email"
          className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 w-full p-2.5"
          placeholder="Your email"
          required
        />
        <input
          //   ref={passwordRef}
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
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
