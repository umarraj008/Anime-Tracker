export default function NavBar({ setCurrentList, currentList }) {
  const logo = "https://placehold.co/50x50.png";

  const navLinks = [
    { name: "Currently Watching", value: "currentlyWatching" },
    { name: "Watched", value: "watched" },
    { name: "To Watch", value: "toWatch" },
    { name: "Settings", value: "settings" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="App Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold tracking-wide">AnimeTracker</span>
          </div>

          {/* Right: Nav Buttons */}
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setCurrentList(link.value)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentList === link.value
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}