"use client";
import React from "react";
import FooterImg from "../../../public/cards.webp";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-3xl mb-4">EquiTrain</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <i
                    className="bx bxl-facebook-circle text-black transition-colors duration-500"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#1877F2")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#212121")
                    }
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    className="bx bxl-twitter text-black transition-colors duration-500"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#1DA1F2")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#212121")
                    }
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i
                    className="bx bxl-youtube text-black transition-colors duration-500"
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#FF0000")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#212121")
                    }
                  ></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 ">
            <h6 className="text-lg mb-4">Services</h6>
            <ul>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">How it works</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Web Development</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Work & Portfolio</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">SEO Backlinks</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">SMM production</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Collaboration</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h6 className="text-lg mb-4">About</h6>
            <ul>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Our mission</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Our story</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Team Members</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Plan & Pricing</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Career</a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#">Live Chat</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h6 className="text-lg mb-4">
              We accept all major credit cards for fast and easy payment.
            </h6>
            <p className="mb-4">hello@EquiTrain-team.com</p>
            <p className="mb-4">25 Rue Boni, Annaba</p>
            <p className="mb-4">+213-795-24-13-82</p>
            <Image src={FooterImg} alt="Footer Image" className="mt-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
