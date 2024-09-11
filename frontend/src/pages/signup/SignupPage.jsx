import GenderCheckbox from "./GenderCheckbox";

const SignupPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center  text-gray-300">
          Sign Up <span className=" text-orange-500">ChatApp</span>
        </h1>

        <form>
          <div>
            <label className=" label p-2">
              <span className=" text-base label-text">Full Name</span>
            </label>
            <input
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
              type="password"
              placeholder="Confirm Your Password"
              className=" w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            href="#"
            className=" text-sm hover:underline hover:text-orange-500 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className=" btn btn-block btn-sm mt-2 hover:bg-orange-500 hover:text-gray-300 ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
