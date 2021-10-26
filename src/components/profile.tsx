import React from 'react';
import { PrimaryActionCard } from './primary_action_card';

function GitHubProfileCard() {
  function handleClick() {
    window.open('https://github.com/sergibondarenko', '_blank');
  }

  return (
    <div className="w-full">
      <PrimaryActionCard
        cardMedia={{
          height: "140",
          image: "https://avatars.githubusercontent.com/u/5389745?s=400&u=8fc6893cc45aebaaed2ed7b037176d432e0357d5&v=4",
          alt: "GitHub profile"
        }}
        cardContent={{
          headerText: "sergibondarenko",
          bodyText: "Follow my code on GitHub"
        }}
        onClick={handleClick}
      />
    </div>
  );
}

function StackOverflowBadge() {
  return (
    <a href="https://stackoverflow.com/users/2393924/srgbnd" target="_blank">
      <img
        src="https://stackoverflow.com/users/flair/2393924.png"
        width="208"
        height="58"
        alt="profile for srgbnd at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
        title="profile for srgbnd at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
      />
    </a>
  );
}

export function Profile() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <div className="flex-1 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-sky-700 md:text-4xl text-lg">
              Hi, I'm Sergii, a full-stack WEB developer from Italy.
            </h2>
          </div>
          <div>
            <StackOverflowBadge />
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">
        <GitHubProfileCard />
      </div>
    </div>
  );
}