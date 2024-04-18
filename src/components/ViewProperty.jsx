import { useParams, useLoaderData, Link } from "react-router-dom";
import { LuAreaChart } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Helmet } from "react-helmet-async";


const ViewProperty = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id)
    const estate = estates.find(estate => estate.id === intId);
    const { estate_title, segment_name, image, status, price, description, area, location, facilities } = estate;
    return (
        <div className="max-w-7xl mx-auto my-6">
            <Helmet>
                <title>Haven Harbor | Property Details</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl border">
                <figure data-aos="zoom-in" data-aos-duration="1000" className="px-6 lg:w-2/3" ><img className="rounded-lg" src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 data-aos="zoom-in-left" data-aos-delay='1200' className="card-title text-3xl font-bold">{estate_title}</h2>
                    <p data-aos="zoom-in-left" data-aos-delay='1400' className="text-[#23BE0A]">{segment_name}</p>
                    <div data-aos="zoom-in-left" data-aos-delay='1600' className="divider my-1"></div>
                    <p data-aos="zoom-in-left" data-aos-delay='1600' className="uppercase font-medium text-[#2e4314]">{status}</p>
                    <div data-aos="zoom-in-left" data-aos-delay='1600' className="divider my-1"></div>
                    <p data-aos="zoom-in-left" data-aos-delay='1800'><span className="text-black font-bold">Description : </span>{description}</p>
                    <ul data-aos="zoom-in-left" data-aos-delay='2000' className="flex gap-4 text-[#23BE0A] mt-4">
                        <li className="text-black font-bold">Facilities: </li>
                        {
                            facilities.map((facility, idx) => <li className="uppercase" key={idx}>{facility}</li>)
                        }
                    </ul>
                    <div data-aos="zoom-in-left" data-aos-delay='2200' className="flex gap-8 my-6">
                        <div className="flex items-center gap-2"><LuAreaChart /> {area}</div>
                        <div className="flex items-center gap-2"><MdOutlinePriceChange /> {price}</div>
                        <div className="flex items-center gap-2"><SlLocationPin /> {location}</div>
                    </div>
                    <div data-aos="zoom-in-left" data-aos-delay='2400' className="card-actions justify-end">
                        <Link to='/' className="btn bg-[#1313134D]">Go back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProperty;