import Image from 'next/image';
import React from 'react';

const Map = () => {
    return (
        <>
        <div>
            <Image className='img' width={"700px"} height={"440px"} src="/trip.jpg" />
        </div>

        <style jsx>{`
            .img{
                border-radius: 15px !important;
            }
    
        `}
        </style>
        </>
    );
};

export default Map;