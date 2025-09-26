import type { StudySession } from "../types/StudySession";

type Props = { session: StudySession };
export function SessionCard({ session }: Props) {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="font-bold">{session.subject}</h2>
      <p>{session.minutes} min em {session.date}</p>
    </div>
  );
}
