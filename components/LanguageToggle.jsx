"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  const nextLang = lang === "es" ? "en" : "es";

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLang(nextLang)}
      className="uppercase tracking-wide"
      aria-label={`Switch language to ${nextLang.toUpperCase()}`}
    >
      {nextLang}
    </Button>
  );
};

export default LanguageToggle;
