import React from 'react';

const Mymodal = ({onClickCancel , onClickConfirm}) => {
    return (
        <div>
            <div>
                <h2> Are you sure?</h2>           
            </div>
            <div>
                <button onClick={onClickCancel} >Cancel</button>
                <button onClick={onClickConfirm} >Confirm</button>
            </div>

            <style jsx>{`

        div{
            display: flex;
            flex-direction:column;
            align-item:center;
            z-index: 2;
            background-color: white;
            width: 20rem;
            height: 8rem;
            top: 0;
            left: 0;
 
            }
        
    `}
    </style>
        </div>
    );
};

export default Mymodal;