import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MainLayouts = () => {
    return (
        <div className='px-4 lg:px-0'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;