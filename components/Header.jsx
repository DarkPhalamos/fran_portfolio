import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Fran<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & language */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <LanguageToggle />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
