import { useMemo } from "react";
import type { StudySession } from "../types/StudySession";
import { SessionCard } from "../components/Card";
import { Link } from "react-router-dom";

type Props = {
  sessions: StudySession[];
};

export default function Home({ sessions }: Props) {
  const totalMinutes = useMemo(
    () => sessions.reduce((acc, cur) => acc + cur.minutes, 0),
    [sessions]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1 className="text-2xl mb-4">Minhas Sessões de Estudo</h1>
      <div className="grid gap-2">
        {sessions.map(s => (
          <Link key={s.id} to={`/session/${s.id}`} className="block">
            <SessionCard session={s} />
          </Link>
        ))}
      </div>
      <div>Total de minutos: {totalMinutes}</div>
    </div>
  );
}
