
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";



const Register = () => {
    const { createUser, updateUserProfile, setUpdate, setUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, name, photo } = data;

        if (password.length < 6) {
            toast.warning('Password should be at least 6 characters');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.warning('Please Provide at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.warning('Please Provide at least one lowercase letter');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        navigate('/')
                        toast.success('Successfully registered')
                        setUser({
                            displayName: name,
                            photoURL: photo,
                        })
                        setUpdate(false)
                    });
            })
            .catch((error) => {
                toast.warning('Email already in use', error.message)
            });
        reset();
    }

    return (
        <div className="mt-6">
            <Helmet>
                <title>Haven Harbor | Registration</title>
            </Helmet>
            <div className=" shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border mx-auto rounded-xl">
                <div className="text-center">
                    <h1 data-aos='fade-down' data-aos-duration='1000' className="text-3xl font-bold mt-6">Register!</h1>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already registered? please <Link to='/login' className="text-lg text-blue-700">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
