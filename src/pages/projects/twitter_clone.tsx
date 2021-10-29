import React from 'react';
import { Header, Footer, AdaptiveImageGallery } from '../../components';

function getImages() {
  const images = [];
  for (let i = 4; i > -1; i--) {
    images.push(`/static/images/twitter_screenshots/${i}.png`);
  }
  return images;
}

export default function TwitterClone() {
  function handleImageGalleryClick() {
    window.open('https://twitter-clone.sbondarenko.com', '_blank');
  }
  
  return (
    <div className="h-screen">
      <Header />

      <main className="mx-auto max-w-screen-lg p-4">
        <div className="mt-4 text-center text-sky-700">
          <article>
            <h2 className="text-4xl">Twitter Clone</h2>
            <p className="text-xl md:text-2xl mt-4">
              I developed the <a href="https://github.com/sergibondarenko/twitter-clone" target="_blank" className="underline">Twitter Clone</a> for fun and to learn new technologies.
            </p>
          </article>
        </div>

        <div className="mt-10">
          <article>
            <p>I used <b>TypeScript</b> (a JavaScript superset), <b>React</b>, and Google <a href="https://firebase.google.com/" target="_blank" className="underline text-sky-700">Firebase</a> for the data storage.</p>
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