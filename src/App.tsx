import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { MainLayout } from "./components/layout";
import { SessionDetails } from "./pages/Detalhes";
import { AddSession } from "./pages/NewSection";
import type { StudySession } from "./types/StudySession";

export function App() {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const handleAddSession = useCallback((session: StudySession) => {
    setSessions(prev => [...prev, session]);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddSession onAdd={handleAddSession} />} />
          <Route path="/session/:id" element={<SessionDetails sessions={sessions} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}