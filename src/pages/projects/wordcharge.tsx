import React from 'react';
import { Header, Footer, AdaptiveImageGallery } from '../../components';

function getImages() {
  const images = [];
  for (let i = 9; i > -1; i--) {
    images.push(`/static/images/wordcharge_screenshots/${i}.png`);
  }
  return images;
}

export default function Wordcharge() {
  function handleImageGalleryClick() {
    window.open('https://wordcharge.com', '_blank');
  }

  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto p-4">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Wordcharge</h2>
          <p className="text-xl md:text-2xl mt-4">
            <a href="https://wordcharge.com/" target="_blank" className="underline">Wordcharge</a> is a WEB service that helps you to <span className="text-black">learn foreign languages</span>. 
            I developed it to help myself learn English and Italian. The main idea is to create spaces with texts in any language for which there is a dictionary. Then you can generate word cards from the text. You can switch the cards, remove cards that you know already, and translate the words. 
          </p>
        </div>

        <div className="mt-10">
          <article>
            The technologies I used were <b>JavaScript</b>, <b>React</b>, <b>React Testing Library</b>, and <b>Node.js</b>. 
            The site is running on a Linux virtual machine (VM) in 
            the <a href="https://cloud.google.com/compute" target="_blank" className="underline text-sky-700">Google Cloud</a>. 
            The text translation uses the <a href="https://freedict.org/" target="_blank" className="underline text-sky-700">freedict</a> dictionaries via the freedict daemon, 
            which is running on the VM. And the state is persisted in the browser local storage. 
            The sign-in and log-in are possible via integration with the <a href="https://auth0.com/" target="_blank" className="underline text-sky-700">Auth0</a> service. 
            Some more good additions and improvements are coming; read more about them in the <b><a href="https://github.com/sergibondarenko/wordcharge/blob/main/TODO.md" target="_blank" className="underline text-sky-700">todo</a></b>.
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