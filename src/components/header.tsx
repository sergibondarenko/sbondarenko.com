import React, { useState } from 'react';
import {
  Link,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
  Menu,
  MenuItem
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { PAGES, PROJECTS } from '../constants';

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
            <Link
              key={name}
              color="inherit"
              className="hover:text-sky-700 no-underline cursor-pointer flex-1"
              onClick={() => onClick(path)}
            >
              {name}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-1 cursor-pointer hover:text-sky-700">
        <Link
          color="inherit"
          className="no-underline"
          onClick={() => onClick(PAGES.projects.path)}
        >
          Projects
        </Link>
        {isMenuOpen
          ? <KeyboardArrowUpIcon onClick={handleMenuTrigger} /> 
          : <KeyboardArrowDownIcon onClick={handleMenuTrigger} />}
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
     z-50 top-0 left-0 h-screen pt-2 pl-2">
      <IconButton
        onClick={handleMenuClose}
        aria-label="close menu"
        className="text-white hover:text-sky-700"
      >
        <CloseIcon />
      </IconButton>
      <div className="flex flex-col gap-2 pl-8">
        <Link
          color="inherit"
          className="hover:text-sky-700 no-underline cursor-pointer"
          onClick={() => handleNavigation(PAGES.home.path)}
        >
          Home
        </Link>
        <Link
          color="inherit"
          className="hover:text-sky-700 no-underline cursor-pointer"
          onClick={() => handleNavigation(PAGES.about.path)}
        >
          About
        </Link>
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
      <div className="dropdown-content right-0 z-10">
        <div className="flex flex-col gap-2 mt-1 pl-8 
        py-2 bg-gray-800 text-white w-56 shadow-2xl">
          {Object.entries(PROJECTS).map(([name, { path }]) => {
            return (
              <Link
                key={name}
                color="inherit"
                className="hover:text-sky-700 no-underline cursor-pointer flex-1"
                onClick={() => onClick(path)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <div className="flex gap-1 cursor-pointer hover:text-sky-700">
        <Link
          color="inherit"
          className="no-underline"
          onClick={() => onClick(PAGES.projects.path)}
        >
          Projects
        </Link>
        {isMenuOpen
          ? <KeyboardArrowUpIcon onClick={handleMenuTrigger} /> 
          : <KeyboardArrowDownIcon onClick={handleMenuTrigger} />}
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
    <header className="relative">
      <Box className="flex-1">
        <AppBar position="static" color="transparent" className="shadow-none">
          <Toolbar>
            <IconButton
              className="md:hidden mr-2"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuFlyOutTrigger}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              className="flex-1 cursor-pointer hover:text-sky-700"
              onClick={() => handleNavigation(PAGES.home.path)}
            >
              Sergii Bondarenko
            </Typography>
            
            <div className="hidden md:flex flex-row gap-8">
              <Link
                color="inherit"
                className="hover:text-sky-700 no-underline cursor-pointer"
                onClick={() => handleNavigation(PAGES.home.path)}
              >
                Home
              </Link>
              <Link
                color="inherit"
                className="hover:text-sky-700 no-underline cursor-pointer"
                onClick={() => handleNavigation(PAGES.about.path)}
              >
                About
              </Link>
              <HeaderProjectsMenu onClick={handleNavigation} />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <MenuFlyOut isOpen={isMenuFlyOut} onClose={handleMenuFlyOutTrigger} />
    </header>
  );
}