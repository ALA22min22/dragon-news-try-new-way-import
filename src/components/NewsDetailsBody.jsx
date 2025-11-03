import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsBody = ({ news }) => {


    if (!news) {
        return <p>Loading...</p>; // ডেটা না থাকলে fallback দেখাও
    }

    const item = news[0]; // এখন safe


    return (
        <div>
            <h3 className='font-bold mb-2'>Dragon News</h3>
            <div className='border-1 border-accent p-3'>

                <img className='rounded-lg w-full' src={item?.image_url} alt="" />
                <h2 className='font-bold my-4'>{item?.title}</h2>
                <p className='text-accent'>{item?.details}</p>
                <Link to={`/category/${item?.category_id}`}><button className='btn bg-secondary text-white my-2'> <FaArrowAltCircleLeft></FaArrowAltCircleLeft> All news in this category</button></Link>
            </div>
        </div>
    );
};

export default NewsDetailsBody;