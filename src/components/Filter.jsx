import { useState } from "react";

export default function Filter({ onSearchChange, onFilterChange, filters }) {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    const updated = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search anime..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearchChange(e.target.value);
        }}
        className="p-2 border rounded-md w-full md:w-1/3"
      />

      {/* Filter Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`px-3 py-1 rounded-full border ${
              selectedFilters.includes(filter)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}