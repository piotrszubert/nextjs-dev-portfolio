import React, { ReactNode } from 'react';

type PageHeroProps = {
  heading?: string;
  subheading?: string;
  children?: ReactNode;
};

export default function PageHero({ heading = 'Default heading', subheading = 'Default subheading', children }: PageHeroProps) {
  return (
    <>
      <div className="py-16">
        <h1 className='font-extrabold tracking-tight text-5xl'>{heading}</h1>
        <p className='leading-7 mt-6'>{subheading}</p>
        {children && (
          <div className='mt-6'>
            {children}
          </div>
        )}
      </div>
    </>
  );
}
