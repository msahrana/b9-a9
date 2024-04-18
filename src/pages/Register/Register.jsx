import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import {useState} from "react";
import {FaEyeSlash} from "react-icons/fa6";
import {FaEye} from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser, updateUser, user, setUser} = useAuth();
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {email, password, name, photoURL} = data;

    setError("");
    // setSuccess("");

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password should have one uppercase, one lowercase, one digit & one special character"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        // setSuccess("User create successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User create successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUser(name, photoURL).then(() => {
          console.log(result.user);
          setUser({...user, displayName: name, photoURL: photoURL});
        });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2 mx-auto mt-6 mb-2">
      <h1 className="text-2xl font-bold text-center">Please Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md border"
            {...register("name", {required: true})}
          />
          {errors.name && (
            <span className="text-red-500">Name is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="photoURL" className="block dark:text-gray-600">
            PhotoURL
          </label>
          <input
            type="photoURL"
            name="photoURL"
            id="photoURL"
            placeholder="PhotoURL"
            className="w-full px-4 py-3 rounded-md border"
            {...register("photoURL", {required: true})}
          />
          {errors.photoURL && (
            <span className="text-red-500">PhotoURL is required</span>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border"
              {...register("password", {required: true})}
            />
            <span
              className="absolute top-3 right-2 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
        <button className="block w-full p-3 text-center text-xl font-semibold rounded-sm bg-orange-500">
          Register
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
      {/* {success && <p className="text-green-600">{success}</p>} */}
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <SocialLogin></SocialLogin>
      <p className="text-lg text-center sm:px-6">
        Already have an account?
        <Link to="/login" className="text-red-400 font-semibold ml-2">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
