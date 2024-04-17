import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const { user, updateUserProfile, setUser, setUpdate } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { name, photo } = data;
        updateUserProfile(name, photo)
            .then(() => {
                navigate('/userProfile')
                setUser({
                    displayName: name,
                    photoURL: photo,
                })
                setUpdate(false)
            });
        reset();
    }
    return (
        <>
            <div className="hero">
                <Helmet>
                    <title>Real Estate | Update Profile</title>
                </Helmet>
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 data-aos='fade-down' data-aos-duration='1000' className="text-5xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder={user?.displayName} className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder={user?.photoURL} className="input input-bordered" {...register("photo", { required: true })} />
                                {errors.photo && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#23BE0A] text-white">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default UpdateProfile;