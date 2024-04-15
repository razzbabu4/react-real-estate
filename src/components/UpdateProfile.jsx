import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const { updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { name, photo, phone} = data;
        updateUserProfile(name, photo, phone)
        .then(()=>{
            navigate('/userProfile')
        });
        reset();
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Update Profile</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="new name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="new img" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Optional (phone number)</span>
                            </label>
                            <input type="text" placeholder="phone number" className="input input-bordered" {...register("phone")} />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default UpdateProfile;