import React from 'react';
import { Header, Footer } from '../../components';

export default function Wordcharge() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Wordcharge</h2>
          <p className="text-2xl mt-4">
            <a href="https://wordcharge.com/" target="_blank" className="underline">Wordcharge</a> is a WEB service that helps you to <span className="text-black">learn foreign languages</span>. 
            I developed it to help myself learn English and Italian. The main idea is to create spaces with texts in any language for which there is a dictionary. Then you can generate word cards from the text. You can switch the cards, remove cards that you know already, and translate the words. 
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}