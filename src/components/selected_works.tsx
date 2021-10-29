import React from 'react';
import { PrimaryActionCard } from './primary_action_card';
import { PROJECTS } from '../constants';
import { useRouter } from 'next/router';

function SelectedWork({ name, image, path }) {
  const router = useRouter();

  function handleClick() {
    router.push(path);
  }

  return (
    <div className="text-center">
      <PrimaryActionCard
        onClick={handleClick}
        cardContent={{
          headerText: name,
        }}
        cardMedia={{
          alt: name,
          src: image,
        }}
      />
    </div>
  );
}

export function SelectedWorks() {
  return (
    <div className="p-4 mt-10">
      <div className="text-center">
        <h2 className="text-sky-700 text-2xl">Selected works</h2>
      </div>
      <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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