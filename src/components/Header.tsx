export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            <span className="text-hydro-blue">Små</span>
            <span className="text-white">kraft</span>
            <span className="text-hydro-green">megleren</span>
          </div>
          
          {/* Navigation placeholder for future use */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Add navigation items here if needed */}
          </nav>
        </div>
      </div>
    </header>
  );
};