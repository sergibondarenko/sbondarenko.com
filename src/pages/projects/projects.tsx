import React from 'react';
import { useRouter } from 'next/router';
import { Header, Footer } from '../../components';
import { PROJECTS } from '../../constants';

export default function Projects() {
  const router = useRouter();

  function handleClick(path: string) {
    router.push(path);
  }

  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-4">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Projects</h2>
        </div>

        <div className="flex flex-col gap-4 text-sky-700 text-xl mt-10">
          {Object.entries(PROJECTS).map(([name, prop]) => {
            return <a key={name} onClick={() => handleClick(prop.path)} className="underline cursor-pointer">{name}</a>;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}