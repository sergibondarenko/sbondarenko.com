import React from 'react';
import { Header, Profile } from '../components';

export default function Home() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <Profile />
      </main>
    </div>
  );
}
