
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Register = () => {
    const { createUser, updateUserProfile, logOut } = useAuth();
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, name, photo } = data;
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
            })
    }

    return (
            <div className="mt-6">
                <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border mx-auto rounded-xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-6">Register!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                        <div>
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Full name" className="w-full input input-bordered" {...register("name", { required: true })} />
                        </div>
                        {errors.name && <span className="text-red-500">This field is required</span>}
                        <div>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo url" className="w-full input input-bordered" {...register("photo")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="w-full input input-bordered" {...register("email", { required: true })} />
                        </div>
                        {errors.email && <span className="text-red-500">This field is required</span>}
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input className="relative w-full input input-bordered"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                {...register("password", { required: true })} />
                            <span className="absolute -translate-x-6 translate-y-4" onClick={() => setShowPassword(!showPassword)}> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <div className="form-control mt-6">
                            <button onClick={logOut} className="btn btn-primary">Register</button>
                        </div>
                        <p>Already registered? please <Link to='/login' className="text-lg text-blue-700">Login</Link></p>
                    </form>
                </div>
            </div>
    );
};

export default Register;



// const [registerError, setRegisterError] = useState('')
//     const [registerSuccess, setRegisterSuccess] = useState('')
//     if (password.length < 6) {
//         setRegisterError('Password should be at least 6 characters');
//         return;
//     }
//     else if (!/[A-Z]/.test(password)) {
//         setRegisterError('Please Provide at least one uppercase letter');
//         return;
//     }