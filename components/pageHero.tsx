import React from 'react';

export default function PageHero({ heading = 'Default heading', subheading = 'Default subheading' }) {
  return (
    <>
        <div className="py-5">
            <h1 className='font-extrabold tracking-tight lg:text-5xl'>{heading}</h1>
            <p className='leading-7 mt-6'>{subheading}</p>
        </div>
    </>
  );
}
