import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
    return (
        <div className='bg-[#091b18] h-screen flex flex-col items-center justify-center'>
            <div className='flex items-center space-x-2 mb-10'>
                <img className="rounded-full h-20 w-20"
                    src="https://www.adorama.com/alc/wp-content/uploads/2020/10/abstract-photography-design-feature-1024x576.jpg"
                    alt="loading animation" />
                <h1 className='text-lg text-white font-bold'>Loading the Crypto Lottery</h1>
            </div>
            <PropagateLoader color='#ffffff' size={30} />
        </div>
    )
}

export default Loading