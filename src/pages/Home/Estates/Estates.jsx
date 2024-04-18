import { useLoaderData } from 'react-router-dom'
import SingleEstate from './SingleEstate';

const Estates = () => {
    const estates = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                estates.map(estate => <SingleEstate key={estate.id} estate={estate}></SingleEstate>)
            }
        </div>
    );
};

export default Estates;