import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import icon from '../../public/icons8-residential.png';

const NavBar = () => {
    const { user, logOut } = useAuth();

    const navLink =
        <>
            <li><NavLink to='/' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>Home</NavLink></li>
            <li><NavLink to='/userProfile' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>Update Profile</NavLink></li>
            {user && <li><NavLink to='/Contact' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#23BE0A" : "",
                    border: isActive ? "1px solid #23BE0A" : "",
                    color: isActive ? "white" : "",
                };
            }}>Contact Us</NavLink></li>}
            

        </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto my-6 shadow-md">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                        { user &&

                        <li><Link className=" bg-red-500 px-4 text-white text-center" onClick={logOut}>Logout</Link></li>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="h-10 w-10 hidden lg:flex" src={icon} alt="icon" /><span className="">Haven Harbor</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <div>
                        <div className="btn btn-ghost btn-circle avatar relative group">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                            </div>
                            <span className="text-black bg-gray-100 p-3 rounded-lg absolute right-14 opacity-0 group-hover:opacity-70">{user.displayName || 'Unknown'}</span>
                        </div>
                    </div>
                    <Link className="btn btn-error ml-2 text-white hidden lg:flex" onClick={logOut}>Logout</Link>
                </>
                    : <Link to='/login' className="btn bg-[#23BE0A] text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;