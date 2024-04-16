import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth";
import {Helmet} from "react-helmet-async";

const UpdateProfile = () => {
  const {updateUser} = useAuth();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {name, photoURL} = data;

    updateUser(name, photoURL)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border-2 mx-auto my-20">
      <Helmet>
        <title>Elysian Estates | Update Profile</title>
      </Helmet>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-md"
              {...register("name", {required: true})}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div>
            <label htmlFor="photoURL" className="text-sm">
              PhotoURL
            </label>
            <input
              type="photoURL"
              name="photoURL"
              id="photoURL"
              placeholder="PhotoURL"
              className="w-full px-4 py-3 border rounded-md"
              {...register("photoURL", {required: true})}
            />
            {errors.photoURL && (
              <span className="text-red-500">PhotoURL is required</span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button className="w-full px-8 py-3 font-semibold rounded-md bg-orange-500 text-xl">
              Saving
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
