import React from 'react';
import HeaderImg from '@assets/header-img.png';

const Banner: React.FC<{ title?: string }> = ({ title = 'Demo' }) => {
    return (
        <figure className="mt-20 relative filter">
            <a href="#">
                <img
                    className="-mt-2 overflow-hidden"
                    src={HeaderImg}
                    alt="image description"
                />
            </a>
            <figcaption className="absolute w-full h-full text-lg bottom-0 bg-orange-400 opacity-80 flex justify-center align-middle">
                <h2 className="self-center text-white text-5xl">{title}</h2>
            </figcaption>
        </figure>
    );
};

export default Banner;
