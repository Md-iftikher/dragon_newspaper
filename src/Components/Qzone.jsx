import React from 'react';
import img1 from "../assets/class.png"
import img2 from "../assets/swimming.png"
import img3 from "../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-slate-200 p-3'>
            <h2 className="text-2xl font-bold py-2 px-3">Q-Zone</h2>
            <div className='grid justify-center items-center'>
               <div>
                <img src={img1} alt="" />
               </div>
               <div>
                <img src={img2} alt="" />
               </div>
               <div>
                <img src={img3} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Qzone;