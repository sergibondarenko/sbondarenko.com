import React from 'react';
import { Header, Footer, AdaptiveImageGallery } from '../../components';

function getImages() {
  const images = [];
  for (let i = 13; i > -1; i--) {
    images.push(`/static/images/uber_screenshots/${i}.png`);
  }
  return images;
}

export default function UberClone() {
  function handleImageGalleryClick() {
    window.open('https://github.com/sergibondarenko/uber', '_blank');
  }
  
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-4">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Uber Clone</h2>
          <p className="text-2xl mt-4">
            I developed the <a href="https://github.com/sergibondarenko/uber" target="_blank" className="underline">Uber Clone</a> for fun and to learn new technologies.
          </p>
        </div>

        <div className="mt-10">
          <article>
            I used <b>TypeScript</b> (a JavaScript superset), <b>React Native</b>, <b>Redux</b>, <b>Tailwind CSS</b> and the <a href="https://developers.google.com/maps" target="_blank" className="underline text-sky-700">Google Maps API</a>. 
          </article>
        </div>

        <div className="mt-10">
          <AdaptiveImageGallery images={getImages()} onClick={handleImageGalleryClick} />
        </div>
      </main>

      <Footer />
    </div>
  );
}