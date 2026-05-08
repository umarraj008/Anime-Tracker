import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import AnimeList from "./components/AnimeList";
import { AnimeListData } from "./animeListData.js";

const filters = ["Action", "Adventure", "Fantasy", "Comedy", "Drama", "Romance"];

function App() {
  const [animeData, setAnimeData] = useState(AnimeListData);
  const [currentList, setCurrentList] = useState("currentlyWatching");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSearchChange = (term) => setSearchTerm(term.toLowerCase());
  const handleGenreChange = (genres) => setSelectedGenres(genres);

  // Filter anime based on search + selected genres
  const filteredAnime = animeData[currentList].filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm);
    const matchesGenre =
      selectedGenres.length === 0 ||
      selectedGenres.some((g) => anime.genres.includes(g));
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar setCurrentList={setCurrentList} currentList={currentList} />
      <Filter
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
        filters={filters}
      />
      <AnimeList
        animeList={animeData[currentList]}
        onEdit={(anime) => handleEdit(anime)}
        onDelete={(anime) => handleDelete(anime)}
        onRefetch={(anime) => handleRefetch(anime)}
      />
    </div>
  );
}

export default App;