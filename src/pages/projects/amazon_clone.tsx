import React from 'react';
import { Header, Footer, AdaptiveImageGallery } from '../../components';

function getImages() {
  const images = [];
  for (let i = 8; i > -1; i--) {
    images.push(`/static/images/amazon_screenshots/${i}.png`);
  }
  return images;
}

export default function AmazonClone() {
  function handleImageGalleryClick() {
    window.open('https://amazon-clone.sbondarenko.com/', '_blank');
  }
  
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-4">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Amazon Clone</h2>
          <p className="text-2xl mt-4">
            I developed the <a href="https://github.com/sergibondarenko/amazon" target="_blank" className="underline">Amazon Clone</a> for fun and to learn new technologies.
          </p>
        </div>

        <div className="mt-10">
          <article>
            To develop it, I used <b>TypeScript</b> (a JavaScript superset), <b>Next.js</b>, <b>React</b>, 
            <b>Redux</b>, <b>Tailwind CSS</b>, OAuth 2.0 authentication <a href="https://developers.google.com/identity/protocols/oauth2" target="_blank" className="underline text-sky-700">Google API</a>, <a href="https://www.google.com/url?q=https%3A%2F%2Fstripe.com%2F&sa=D&sntz=1&usg=AFQjCNEM_f_AIF5M_BsaYRH027mSjx3QYg" target="_blank" className="underline text-sky-700">Stripe</a> payment gateway, 
            and data storage via the <a href="https://firebase.google.com/" target="_blank" className="underline text-sky-700">Google Firebase</a>.
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