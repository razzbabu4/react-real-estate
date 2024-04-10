import useAuth from "../hooks/useAuth";
import {useLocation, useNavigate} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const { googleLogin, githubLogin } = useAuth();

    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const handleSocialMedia = (socialMedia) => {
        socialMedia()
            .then(result => {
                // console.log(result.user)
                if(result.user){
                    navigate(location?.state || '/')
                }
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <>
            <div className="divider my-2">Continue with</div>
            <div className="flex p-6 justify-around">
                <button onClick={()=>handleSocialMedia(googleLogin)} className="btn btn-outline">
                   <FcGoogle className="text-xl"></FcGoogle> Google
                </button>
                <button onClick={()=>handleSocialMedia(githubLogin)} className="btn btn-outline">
                    <FaGithub className="text-xl"></FaGithub> GitHub
                </button>
            </div>
        </>
    );
};

export default SocialLogin;