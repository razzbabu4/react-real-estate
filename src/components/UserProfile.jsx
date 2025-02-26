import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { MdOutlinePhotoCamera } from "react-icons/md";

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div className="mb-16">
            <Helmet>
                <title>Haven Harbor | User Profile</title>
            </Helmet>
            <div className="max-w-md p-8 m-auto max-h-screen sm:flex sm:space-x-6 dark:bg-gray-100 dark:text-gray-800 mt-8">

                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img data-aos="zoom-in-up" data-aos-duration="1000" src={user?.photoURL} alt="profile" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 data-aos="fade-left" data-aos-delay="1000" className="text-2xl font-semibold">{user?.displayName || "Unknown"}</h2>
                        <span data-aos="fade-left" data-aos-delay="1500" className="text-sm dark:text-gray-600">New Member</span>
                    </div>
                    <div className="space-y-1">
                        <span data-aos="fade-left" data-aos-delay="2000" className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">{user?.email}</span>
                        </span>
                        <span data-aos="fade-left" data-aos-delay="2300" className="flex items-center space-x-2">
                            <MdOutlinePhotoCamera className="text-lg"></MdOutlinePhotoCamera>
                            <span className="dark:text-gray-600 max-w-44 whitespace-nowrap text-ellipsis overflow-hidden">{user?.photoURL}</span>
                        </span>
                    </div>
                    <div data-aos="zoom-in-down" data-aos-delay="2600">
                        <Link to='/updateProfile' className="btn bg-[#23BE0A] text-lg text-white">Edit Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;