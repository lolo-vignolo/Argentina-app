import React from 'react';
import NewPlace from "../components/NewPlace/index.js"

const newPlace = () => {
    return (
        <>
        <div>
            <NewPlace />
        </div>
            <style jsx>{`
                div{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:100%;
                    height:90%
                }
            `}</style>
        </>
    );
};


export default newPlace;