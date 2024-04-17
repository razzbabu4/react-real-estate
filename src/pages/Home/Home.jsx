import { Helmet } from "react-helmet-async";
import Slider from "../Home/Slider/Slider";
import Estates from "./Estates/Estates";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Haven Harbor | Home</title>
            </Helmet>
            <div>
                <Slider></Slider>
            </div>
            <div className="my-10 max-w-7xl mx-auto">
                <Estates></Estates>
            </div>
        </div>
    );
};

export default Home;