import Image from 'next/image';
import React from 'react';

const Map = () => {
    return (
        <>
        <div>
            <Image width={"600px"} height={"350px"} src="/trip.png" />
        </div>

        <style jsx>{`
            img{
                border-radius: 15px;
            }
    
        `}
        </style>
        </>
    );
};

export default Map;