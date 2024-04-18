import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const SingleEstate = ({ estate }) => {
    const {id, estate_title, segment_name, image, status, price, description } = estate;
    return (
        <div data-aos="zoom-out-down" data-aos-duration="1000" className="card card-compact w-full bg-base-100 shadow-xl border ">
           <div className="relative">
           <figure><img className="h-72 w-full" src={image} alt="house" /></figure>
            <div className="absolute text-white bg-blue-700 font-medium p-3 rounded-br-xl bg-opacity-50 top-0 left-0 uppercase">
                {status}
            </div>
            <div className="absolute text-white bg-black font-medium p-3 rounded-tl-xl bg-opacity-50 bottom-0 right-0">
                {price}
            </div>  
           </div>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p className="font-bold text-green-700">{segment_name}</p>
                <p className="">{description}</p>
                <div className="card-actions">
                    <Link to={`/viewProperty/${id}`} className="btn w-full btn-outline bg-[#23BE0A] text-white">View Property</Link>
                </div>
            </div>
        </div>
    );
};

SingleEstate.propTypes = {
    estate: PropTypes.object
}

export default SingleEstate;