import React from 'react';

export interface PrimaryActionCardProps {
  cardMedia: {
    height?: string,
    src: string,
    alt: string,
  };
  cardContent: {
    headerText: string,
    bodyText?: string
  };
  onClick: Function;
}

export function PrimaryActionCard({ cardMedia, cardContent, onClick }: PrimaryActionCardProps) {
  const { height: imgHeight = '72', ...imgProps } = cardMedia;

  function handleClick() {
    onClick();
  }

  return (
    <div onClick={handleClick} className="flex flex-col gap-2 rounded 
    overflow-hidden shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
      <img className={`w-full h-${imgHeight} object-cover`} {...imgProps} />
      <div className="border-t border-gray-200 p-4">
        <h2 className="text-lg font-semibold">{cardContent.headerText}</h2>
        {cardContent.bodyText && <p>{cardContent.bodyText}</p>}
      </div>
    </div>
  );
}