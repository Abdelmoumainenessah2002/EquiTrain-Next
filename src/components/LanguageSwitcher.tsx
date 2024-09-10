"use client";
import { useRouter } from "next/navigation"; // Correct import
import { useEffect, useState } from "react";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const currentLocale = window.location.pathname.split("/")[1];
    setLanguage(currentLocale || "en");
  }, []);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    setLanguage(selectedLocale);

    // Redirect to the selected locale
    router.push(
      `/${selectedLocale}${window.location.pathname.replace(
        /^\/(en|fr|ar)/,
        ""
      )}`
    );
  };

  return (
    <select
      value={language}
      onChange={changeLanguage}
      className="p-2 border rounded block mt-8"
    >
      <option value="en" className="text-xl">English</option>
      <option value="fr" className="text-xl">Français</option>
      <option value="ar" className="text-xl">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;
