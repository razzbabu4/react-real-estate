import { Link } from "react-router-dom";


const SingleEstate = ({ estate }) => {
    const {id, estate_title, segment_name, image, status, price, description } = estate;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border ">
           <div className="relative">
           <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="house" /></figure>
            <div className="absolute text-white bg-blue-500 p-3 rounded-br-xl bg-opacity-50 top-0 left-0">
                {status}
            </div>
            <div className="absolute text-white bg-black p-3 rounded-tl-xl bg-opacity-50 bottom-0 right-0">
                {price}
            </div>
           </div>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p className="font-bold text-green-700">{segment_name}</p>
                <p className="">{description}</p>
                <div className="card-actions">
                    <Link to={`/viewProperty/${id}`} className="btn w-full btn-outline">View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleEstate;