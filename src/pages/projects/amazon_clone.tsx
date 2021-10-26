import React from 'react';
import { Header, Footer } from '../../components';

export default function AmazonClone() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Amazon Clone</h2>
          <p className="text-2xl mt-4">
            I developed the <a href="https://github.com/sergibondarenko/amazon" target="_blank" className="underline">Amazon Clone</a> for fun and to learn new technologies.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}