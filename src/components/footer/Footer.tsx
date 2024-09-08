"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterImg from "../../../public/cards.webp";
import Image from "next/image";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const Footer: React.FC = () => {
  const t = useTranslations('');

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
                    title={t("footer.social.facebook")}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter
                    className="transition-colors duration-500 hover:text-blue-400"
                    size={25}
                    title={t("footer.social.twitter")}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaYoutube
                    className="transition-colors duration-500 hover:text-red-500"
                    size={25}
                    title={t("footer.social.youtube")}
                  />
                </a>
              </li>
            </ul>
            <LanguageSwitcher /> {/* Add the language switcher here */}
          </div>

          {/* Services Section */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 mb-6">
            <h6 className="text-sm md:text-lg lg:text-2xl font-semibold mb-4">
              {t("footer.sections.services.title")}
            </h6>
            <ul>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.services.howItWorks")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.services.webDevelopment")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.services.workPortfolio")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.services.seoBacklinks")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.services.smmProduction")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.services.collaboration")}
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 mb-6 md:mt-1">
            <h6 className="text-sm md:text-lg lg:text-2xl font-semibold mb-4">
              {t("footer.sections.about.title")}
            </h6>
            <ul>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.about.mission")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.about.story")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.about.team")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.about.pricing")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.about.career")}
                </a>
              </li>
              <li className="mb-2 hover:text-blue-600 transition">
                <a href="#" className="text-xs md:text-base lg:text-lg">
                  {t("footer.sections.about.liveChat")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Payment Section */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4">
            <h6 className="text-sm md:text-lg lg:text-2xl font-semibold mb-4">
              {t("footer.sections.contact.title")}
            </h6>
            <p className="mb-2 text-xs md:text-base lg:text-lg">
              {t("footer.sections.contact.email")}
            </p>
            <p className="mb-2 text-xs md:text-base lg:text-lg">
              {t("footer.sections.contact.address")}
            </p>
            <p className="mb-2 text-xs md:text-base lg:text-lg">
              {t("footer.sections.contact.phone")}
            </p>
            <Image src={FooterImg} alt="Footer Image" className="mt-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
