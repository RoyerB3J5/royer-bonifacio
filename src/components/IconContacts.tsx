import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function IconContacts() {
  return (
    <div className="w-full flex flex-row lg:flex-col justify-center items-center gap-5">
      <a href="https://github.com/RoyerB3J5" target="_blank" rel="noopener noreferrer">
        <FiGithub
          className="size-5 
              hover:text-primary-dark hover:dark:text-primary-ligth  cursor-pointer hover:-translate-y-1 transition-all"
        />
      </a>
      <a href="https://www.instagram.com/rbcode05/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="size-5 hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer hover:-translate-y-1 transition-all" />
      </a>
      <a href="https://www.linkedin.com/in/royer-bonifacio-2984a42a7/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin className="size-5 hover:text-primary-dark hover:dark:text-primary-ligth cursor-pointer hover:-translate-y-1 transition-all" />
      </a>
    </div>
  );
}

export default IconContacts;
