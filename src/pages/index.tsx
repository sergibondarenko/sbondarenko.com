import React from 'react';
import { Header, Profile, SelectedWorks } from '../components';

export default function Home() {
  return (
    <div className="h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <Profile />
        <SelectedWorks />
      </main>
    </div>
  );
}
