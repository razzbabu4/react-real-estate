import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import { toast } from 'react-toastify';

const Login = () => {
    const { logIn, user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        if(user){
            toast.warning('User already exist')
            return;
        }
        logIn(email, password)
            .then(() => {
                toast.success('Successfully login')

            })
            .catch(()=>{
                toast.warning('Please provide a valid user info')
            });
            reset()
    }
    return (
        <div className="mt-6">
            <div className="shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border mx-auto rounded-xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mt-6">Login now!</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <div className="text-center mb-6">
                    <p>Do not registered? please <Link to='/register' className="text-lg text-blue-700">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;


