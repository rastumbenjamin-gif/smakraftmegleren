import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            <span className="text-white">Småkraft</span>
            <span className="text-hydro-green">megleren</span>
          </div>
          
          {/* Navigation and Language Switcher */}
          <nav className="flex items-center space-x-4">
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};