import React from 'react';
import githubIcon from '../img/github.svg';

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/IlyaEru">
        <img alt="github-icon" className="github-icon" src={githubIcon} />
      </a>
      <a href="https://github.com/IlyaEru">IlyaEru</a>
    </footer>
  );
}
