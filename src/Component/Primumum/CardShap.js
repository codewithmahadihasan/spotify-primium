import React from 'react';

const CardShap = (props) => {
    return (
        <div className='flex gap-2  mt-3'>
            <i class="fa-solid fa-check mt-1.5"></i> <p>{props.feautres}</p>
        </div>
    );
};

export default CardShap;