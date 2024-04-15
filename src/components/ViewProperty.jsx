import { useParams, useLoaderData, Link } from "react-router-dom";
import { LuAreaChart } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";


const ViewProperty = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id)
    const estate = estates.find(estate => estate.id === intId);
    const { estate_title, segment_name, image, status, price, description, area, location, facilities } = estate;
    return (
        <div className="max-w-7xl mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2" ><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold">{estate_title}</h2>
                    <p className="text-[#23BE0A]">{segment_name}</p>
                    <div className="divider my-2"></div>
                    <p className="uppercase font-medium text-[#2e4314]">{status}</p>
                    <div className="divider my-2"></div>
                    <p><span className="text-black font-bold">Description : </span>{description}</p>
                    <ul className="flex gap-6 text-[#23BE0A] font-medium mt-4">
                        <li className="text-black font-bold">Facilities: </li>
                        {
                            facilities.map((facility, idx) => <li className="uppercase" key={idx}>{facility}</li>)
                        }
                    </ul>
                    <div className="flex gap-8 my-6">
                        <div className="flex items-center gap-2"><LuAreaChart /> {area}</div>
                        <div className="flex items-center gap-2"><MdOutlinePriceChange/> {price}</div>
                        <div className="flex items-center gap-2"><SlLocationPin/> {location}</div>
                    </div>
                    <div className="divider"></div>
                    <div className="card-actions justify-end">
                        <Link to='/' className="btn bg-[#1313134D]">Go back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProperty;