import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignupPage = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center  text-gray-300">
          Sign Up <span className=" text-orange-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text">Full Name</span>
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              type="text"
              placeholder="Your Name"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text">Username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="Enter Your Username"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label ">
              <span className=" text-base label-text">Password</span>
            </label>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              placeholder="Enter Your Password"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className=" label ">
              <span className=" text-base label-text">Confirm Password</span>
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="Confirm Your Password"
              className=" w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className=" text-sm hover:underline hover:text-orange-500 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              disabled={loading}
              className={` btn btn-block btn-sm mt-2 hover:bg-orange-500 hover:text-gray-300 ${
                loading && "bg-orange-500"
              } `}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
