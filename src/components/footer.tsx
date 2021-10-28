import React from 'react';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

export function Footer() {
  return (
    <footer className="p-2 fixed w-full bottom-0 bg-white">
      <div className="flex flex-row gap-2">
        <div>
          <IconButton
            color="default"
            aria-label="GitHub"
            href="https://github.com/sergibondarenko"
            target="_blank"
            className="hover:text-sky-700"
          >
            <GitHubIcon />
          </IconButton>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <IconButton
            color="default"
            aria-label="Email"
            href="mailto:sergibondarenko@gmail.com"
            className="hover:text-sky-700"
          >
            <EmailIcon />
          </IconButton>
          <a
            href="mailto:sergibondarenko@gmail.com"
            className="hover:text-sky-700 hidden md:block text-xl"
          >
            sergibondarenko@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}