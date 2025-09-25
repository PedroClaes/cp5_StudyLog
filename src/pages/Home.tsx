import { useState } from "react";
import type { StudySession } from "../types/StudySession";
import { SessionCard } from "../components/Card";


const initialSessions: StudySession[] = [
  { id: "1", subject: "React", minutes: 90, date: "2025-09-21" },
  { id: "2", subject: "Estruturas de Dados", minutes: 120, date: "2025-09-22" }
];

export function Home() {
  const [sessions] = useState(initialSessions);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <h1 className="text-2xl mb-4">Minhas Sessões de Estudo</h1>
      <div className="grid gap-2">
        {sessions.map(s => <SessionCard key={s.id} session={s} />)}
      </div>
    </div>
  );
}

