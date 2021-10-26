import React from 'react';
import { Header, Footer } from '../../components';

export default function UberClone() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="mt-4 text-center text-sky-700">
          <h2 className="text-4xl">Uber Clone</h2>
          <p className="text-2xl mt-4">
            I developed the <a href="https://github.com/sergibondarenko/uber" target="_blank" className="underline">Uber Clone</a> for fun and to learn new technologies.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}