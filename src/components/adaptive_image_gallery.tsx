import React from 'react';

interface AdaptiveImageGalleryProps {
  images: string[];
  onClick: Function;
}

export function AdaptiveImageGallery({ images, onClick }: AdaptiveImageGalleryProps) {
  function handleClick() {
    onClick();
  }
  
  return (
    <ul className="flex flex-wrap">
      {images.map((src) => {
        return <li className="h-72 flex-grow" key={src}>
          <img
            className="min-w-full max-h-full align-bottom object-cover transition duration-500 
            ease-in-out hover:bg-sky-700 transform hover:-translate-y-1 hover:scale-110 border-2 border-black cursor-pointer"
            src={src}
            loading="lazy"
            onClick={handleClick}
          />
        </li>;
      })}
    </ul>
  );
}