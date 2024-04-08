import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {signIn} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mx-auto mt-12 mb-8">
      <h1 className="text-2xl font-bold text-center">Please Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border"
            {...register("email", {required: true})}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border"
            {...register("password", {required: true})}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
        <button className="block w-full p-3 text-center text-xl font-semibold rounded-sm bg-orange-500">
          Login
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <SocialLogin></SocialLogin>
      <p className="text-lg text-center sm:px-6">
        Don`t have an account?
        <Link to="/register" className="text-red-400 font-semibold ml-2">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
