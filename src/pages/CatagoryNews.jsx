import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Newscard from '../Components/Newscard';

const CatagoryNews = () => {
    const data = useLoaderData();
    console.log(data.data);
    const Newsdata = data.data;

    return (
        <div>
            <h2 className="text-xl font-semibold">Dragon News Home</h2>
            <p className='text-gray-400'>{Newsdata.length} News found on this Category</p>
            <div>
                <ul>
                    {
                        Newsdata.map(news => (
                            <Newscard key={news._id} news={news}></Newscard> // Added key prop
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default CatagoryNews;