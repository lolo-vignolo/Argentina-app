import React from 'react';

const BackDrop = () => {
    return (
    <>
    <div />
    <style jsx>{`

        div{
            position: fixed;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.75);
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            }
        
    `}
    </style>
    </>
    )     
     
};

export default BackDrop;