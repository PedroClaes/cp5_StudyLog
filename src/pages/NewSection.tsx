import { useState } from "react";
import type { StudySession } from "../types/StudySession";


export function AddSession({ onAdd }: { onAdd: (session: StudySession) => void }) {
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAdd({
      id: crypto.randomUUID(),
      subject,
      minutes,
      date
    });
    setSubject("");
    setMinutes(0);
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-2" >
      <input placeholder="Disciplina" value={subject} onChange={e => setSubject(e.target.value)} required className="border p-1" />
      <input type="number" placeholder="Minutos" value={minutes} onChange={e => setMinutes(Number(e.target.value))} required className="border p-1" />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="border p-1" />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">Adicionar</button>
    </form>
  );
}

