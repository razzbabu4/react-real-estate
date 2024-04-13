import { useParams, useLoaderData } from "react-router-dom";


const ViewProperty = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id)
    const estate = estates.find(estate => estate.id === intId);
    const { estate_title, segment_name, image, status, price, description  } = estate;
    return (
        <div>
            <h1>{estate_title}</h1>
        </div>
    );
};

export default ViewProperty;