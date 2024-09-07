"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterImg from "../../../public/cards.webp";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Brand and Social Links */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 mb-6">
            <h2 className="text-sm md:text-lg lg:text-3xl font-bold mb-4">
              EquiTrain
            </h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <FaFacebook
                    className="transition-colors duration-500 hover:text-blue-600"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter
                    className="transition-colors duration-500 hover:text-blue-400"
                    size={25}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube
                    className="transition-colors duration-500 hover:text-red-500"
                    size={25}
                  />
                </a>
              </li>
            </ul>
            
          </div>

          {/* Services Section */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 mb-6">
            <h6 className="text-sm md:text-lg lg:text-2xl font-semibold mb-4">
              Services
            </h6>
            <ul>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  How it works
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Web Development
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Work & Portfolio
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  SEO Backlinks
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  SMM production
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 mb-6 md:mt-1">
            <h6 className="text-sm md:text-lg lg:text-2xl font-semibold mb-4">
              About
            </h6>
            <ul>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Our mission
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Our story
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Team Members
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Plan & Pricing
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Career
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Payment Section */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4">
            <h6 className="text-sm md:text-lg lg:text-2xl font-semibold mb-4">
              We accept all major credit cards.
            </h6>
            <p className="mb-2 text-xs md:text-base lg:text-lg">
              hello@EquiTrain-team.com
            </p>
            <p className="mb-2 text-xs md:text-base lg:text-lg">
              25 Rue Boni, Annaba
            </p>
            <p className="mb-2 text-xs md:text-base lg:text-lg">
              +213-795-24-13-82
            </p>
            <Image src={FooterImg} alt="Footer Image" className="mt-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
