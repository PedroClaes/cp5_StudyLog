import { useParams } from "react-router-dom";
import type { StudySession } from "../types/StudySession";


export function SessionDetails({ sessions }: { sessions: StudySession[] }) {
  const { id } = useParams();
  const session = sessions.find(s => s.id === id);

  if (!session) return <div>Não encontrada.</div>;

  return (
    <div className="p-4">
      <h2 className="font-bold">{session.subject}</h2>
      <p>Duração: {session.minutes} minutos</p>
      <p>Data: {session.date}</p>
    </div>
  );
}
