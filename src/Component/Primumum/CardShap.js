import React from 'react';

const CardShap = (props) => {
    return (
        <div className='flex gap-2 items-center mt-3'>
            <i class="fa-solid fa-check"></i> <p>{props.feautres}</p>
        </div>
    );
};

export default CardShap;