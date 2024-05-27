import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store"; // Adjust the import according to your store setup

export const useLanguage = () => {
  const { language } = useSelector((state: RootState) => state.app);
  const [locale, setLocale] = useState<"en" | "ar">("en");

  useEffect(() => {
    setLocale(language);
  }, [language]);

  const getTrans = (obj) => {
    try {
      if (typeof obj === "string") return JSON.parse(obj)[locale];
      return obj[locale];
    } catch (error) {
      return obj;
    }
  };

  return {
    getTrans,
    language,
  };
};
