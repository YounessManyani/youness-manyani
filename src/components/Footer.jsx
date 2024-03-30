import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin ,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons"; // Importing the solid envelope icon
import Logo from '../assets/Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
           <a href="#">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 mr-2"
            />
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center mb-4 md:mb-0">
            <a href="https://github.com/YounessManyani" className="text-white mr-4 hover:text-gray-500">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/youness-manyani" className="text-white mr-4 hover:text-gray-500">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:younessmanyani10@gmail.com" className="text-white hover:text-gray-500">
              <FontAwesomeIcon icon={faEnvelopeSolid} size="2x" /> {/* Using the solid envelope icon */}
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Youness Manyani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
