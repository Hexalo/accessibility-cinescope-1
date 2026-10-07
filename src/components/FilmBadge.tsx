import { Film } from "../types/Film";

export default function FilmBadge({ film }: { film: Film }) {
  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <div
        className={
          film.available ? "availability available" : "availability unavailable"
        }
      ></div>
      <p> {film.available ? "available" : "unavailable"} </p>
    </div>
  );
}
