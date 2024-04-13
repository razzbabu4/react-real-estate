import Slider from "../Home/Slider/Slider";
import Estates from "./Estates/Estates";
// import {useLoaderData} "react-router-dom"



const Home = () => {
    // const h = useLoaderData()
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Slider></Slider>
            </div>
            <div className="my-10">
                <Estates></Estates>
            </div>
        </div>
    );
};

export default Home;