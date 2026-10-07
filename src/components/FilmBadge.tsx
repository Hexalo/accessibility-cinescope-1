import { Film } from "../types/Film";

export default function FilmBadge({ film }: { film: Film }) {
  return (
    <div className="film-badge">
      <div
        className={
          film.available ? "availability available" : "availability unavailable"
        }
      ></div>
      <p>{film.available ? "disponible" : "indisponible"}</p>
    </div>
  );
}
