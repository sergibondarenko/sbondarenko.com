import React from 'react';
import { PrimaryActionCard } from './primary_action_card';
import { PROJECTS } from '../constants';
import { useRouter } from 'next/router';

function SelectedWork({ name, image, path }) {
  const router = useRouter();

  function handleClick() {
    window.open(path, '_blank');
  }

  return (
    <div className="text-center">
      <PrimaryActionCard
        onClick={handleClick}
        cardContent={{
          headerText: name,
          bodyText: name
        }}
        cardMedia={{
          alt: name,
          image: image,
          height: "70"
        }}
      />
    </div>
  );
}

export function SelectedWorks() {
  return (
    <div className="p-4 mt-4">
      <div className="text-center">
        <h2 className="text-sky-700 text-2xl">Selected works</h2>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(PROJECTS)
          .map(([name, { media, path }]) => {
            return (
              <SelectedWork
                key={name}
                name={name}
                image={media.selected_works_image}
                path={path}
              />
            );
          })
        }
      </div>
    </div>
  );
}