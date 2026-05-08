import { useState, useRef, useEffect } from "react";

export default function AnimeItem({ anime, onEdit, onDelete, onRefetch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const progressPercent =
    anime.watchedEpisodes && anime.totalEpisodes
      ? Math.round((anime.watchedEpisodes / anime.totalEpisodes) * 100)
      : 0;

  return (
    <div className="flex items-center bg-white shadow rounded-lg overflow-hidden mb-4 hover:shadow-lg transition-shadow relative">
      {/* Cover Image */}
      <img
        src={anime.image}
        alt={anime.title}
        className="w-32 h-48 object-cover shrink-0"
      />

      {/* Info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{anime.title}</h2>
            {anime.rating && (
              <span className="text-yellow-500 font-semibold">{anime.rating}/10</span>
            )}
          </div>

          {/* Context Menu Button */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-800 font-bold px-2 py-1"
            >
              ⋮
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10 border">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onEdit(anime);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Edit Progress
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onDelete(anime);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onRefetch(anime);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Refetch Data
                </button>
                {/* Optional: mark as completed / not started */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onEdit({ ...anime, watchedEpisodes: anime.totalEpisodes });
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Mark as Completed
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Short description */}
        <p className="text-gray-600 truncate mt-1">{anime.description}</p>

        {/* Watch Status / Progress */}
        <div className="mt-2">
          {anime.watchedEpisodes > 0 && anime.watchedEpisodes < anime.totalEpisodes ? (
            <>
              <p className="text-gray-700 text-sm mb-1">
                Season {anime.currentSeason} Episode {anime.watchedEpisodes} /{" "}
                {anime.totalEpisodes}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </>
          ) : anime.watchedEpisodes === anime.totalEpisodes && anime.totalEpisodes > 0 ? (
            <p className="text-green-600 font-semibold">Completed</p>
          ) : (
            <p className="text-gray-700 text-sm">
              {anime.seasons} season{anime.seasons > 1 ? "s" : ""}, {anime.totalEpisodes}{" "}
              episode{anime.totalEpisodes > 1 ? "s" : ""}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}