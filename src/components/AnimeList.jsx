import AnimeItem from "./AnimeItem";

export default function AnimeList({ animeList, onEdit, onDelete, onRefetch }) {
  if (!animeList || animeList.length === 0) {
    return <p className="p-4 text-gray-500">No anime to display.</p>;
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      {animeList.map((anime) => (
        <AnimeItem
          key={anime.id}
          anime={anime}
          onEdit={onEdit}
          onDelete={onDelete}
          onRefetch={onRefetch}
        />
      ))}
    </div>
  );
}