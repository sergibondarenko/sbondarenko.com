import React, { useState } from 'react';
import {
  MenuIcon,
  XIcon as CloseIcon,
  ChevronUpIcon as KeyboardArrowUpIcon,
  ChevronDownIcon as KeyboardArrowDownIcon
} from '@heroicons/react/outline'; 
import { useRouter } from 'next/router';
import { PAGES, PROJECTS } from '../constants';

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>

interface MenuFlyOutProjectsProps {
  onClick: Function;
}

function MenuFlyOutProjects({ onClick }: MenuFlyOutProjectsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuTrigger() {
    setIsMenuOpen((prev) => !prev);
  }

  function renderMenu() {
    if (!isMenuOpen) return null;
    return (
      <div className="flex flex-col flex-shrink gap-2 mt-1 pl-4 py-2">
        {Object.entries(PROJECTS).map(([name, { path }]) => {
          return (
            <a
              key={name}
              className="hover:text-sky-700 text-white no-underline cursor-pointer flex-1"
              onClick={() => onClick(path)}
            >
              {name}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-row items-center gap-1 cursor-pointer hover:text-sky-700">
        <a
          className="no-underline cursor-pointer text-white hover:text-sky-700"
          onClick={() => onClick(PAGES.projects.path)}
        >
          Projects
        </a>
        {isMenuOpen
          ? <KeyboardArrowUpIcon className="h-5 cursor-pointer text-white hover:text-sky-700" onClick={handleMenuTrigger} /> 
          : <KeyboardArrowDownIcon className="h-5 cursor-pointer text-white hover:text-sky-700" onClick={handleMenuTrigger} />}
      </div>
      {renderMenu()}
    </div>
  ); 
}

interface MenuFlyOutProps {
  isOpen: boolean;
  onClose: Function;
}

function MenuFlyOut({ isOpen, onClose }: MenuFlyOutProps) {
  const router = useRouter();
  if (!isOpen) return null;

  function handleMenuClose() {
    onClose();
  }

  function handleNavigation(path: string) {
    handleMenuClose();
    router.push(path);
  }

  return (
    <div className="bg-gray-800 text-white flex flex-col items-start w-2/3 md:w-1/4 min-w-min absolute
     z-50 top-0 left-0 h-screen pt-4 pl-4">
      <CloseIcon className="h-6 text-white hover:text-sky-700 cursor-pointer" onClick={handleMenuClose} />
      <div className="flex flex-col gap-2 pl-8">
        <a
          className="hover:text-sky-700 text-white no-underline cursor-pointer"
          onClick={() => handleNavigation(PAGES.home.path)}
        >
          Home
        </a>
        <a
          className="hover:text-sky-700 text-white no-underline cursor-pointer"
          onClick={() => handleNavigation(PAGES.about.path)}
        >
          About
        </a>
        <MenuFlyOutProjects onClick={handleNavigation} />
      </div>
    </div>
  );
}

interface HeaderProjectsProps {
  onClick: Function;
}

function HeaderProjectsMenu({ onClick }: HeaderProjectsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuTrigger() {
    setIsMenuOpen((prev) => !prev);
  }

  function renderMenu() {
    return (
      <div className="dropdown-content right-0 z-50">
        <div className="flex flex-col gap-2 mt-1 pl-8 
        py-2 bg-gray-800 text-white w-56 shadow-2xl">
          {Object.entries(PROJECTS).map(([name, { path }]) => {
            return (
              <a
                key={name}
                className="hover:text-sky-700 text-white no-underline cursor-pointer flex-1"
                onClick={() => onClick(path)}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <div className="flex flex-row gap-1 items-center cursor-pointer hover:text-sky-700">
        <a
          className="no-underline hover:text-sky-700 text-white cursor-pointer"
          onClick={() => onClick(PAGES.projects.path)}
        >
          Projects
        </a>
        {isMenuOpen
          ? <KeyboardArrowUpIcon className="h-5 cursor-pointer text-white hover:text-sky-700" onClick={handleMenuTrigger} /> 
          : <KeyboardArrowDownIcon className="h-5 cursor-pointer text-white hover:text-sky-700" onClick={handleMenuTrigger} />}
      </div>
      {renderMenu()}
    </div>
  ); 
}

export function Header() {
  const router = useRouter();
  const [isMenuFlyOut, setIsMenuFlyOut] = useState(false);

  function handleMenuFlyOutTrigger() {
    setIsMenuFlyOut((prev) => !prev);
  }

  function handleNavigation(path: string) {
    router.push(path);
  }

  return (
    <header>
      <div className="relative shadow-none bg-gray-800 text-white flex flex-row items-center justify-between p-3 sm:p-4">
        <div className="flex flex-row items-center gap-2">
          <MenuIcon onClick={handleMenuFlyOutTrigger} className="h-6 text-white hover:text-sky-700 md:hidden cursor-pointer" />
          <h2
            className="cursor-pointer hover:text-sky-700 text-white font-semibold text-xl"
            onClick={() => handleNavigation(PAGES.home.path)}
          >
            Sergii Bondarenko
          </h2>
        </div>
        <div>
          <div className="hidden md:flex flex-row gap-8">
            <a
              className="hover:text-sky-700 text-white no-underline cursor-pointer"
              onClick={() => handleNavigation(PAGES.home.path)}
            >
              Home
            </a>
            <a
              className="hover:text-sky-700 text-white no-underline cursor-pointer"
              onClick={() => handleNavigation(PAGES.about.path)}
            >
              About
            </a>
            <HeaderProjectsMenu onClick={handleNavigation} />
          </div>
        </div>
        <MenuFlyOut isOpen={isMenuFlyOut} onClose={handleMenuFlyOutTrigger} />
      </div>
    </header>
  );
}