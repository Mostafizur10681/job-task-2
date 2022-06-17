import React from 'react';

const Service = ({ service }) => {
    const { img, name, description, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} style={{ height: '250px' }} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-yellow-600 text-2xl uppercase">{name}</h2>
                <p>{description}</p>
                <h4 className='text-yellow-600 text-xl'>Price: {price}</h4>
                <button class="btn btn-accent w-full text-white text-lg">Buy Now</button>
            </div>
        </div>
    );
};

export default Service;