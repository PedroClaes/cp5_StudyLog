import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout";
import { Suspense, lazy, useCallback, useState } from "react";
import type { StudySession } from "./types/StudySession";


const Home = lazy(() => import("./pages/Home"));
const AddSession = lazy(() => import("./pages/NewSection"));
const SessionDetails = lazy(() => import("./pages/Detalhes"));
const NotFound = lazy(() => import("./pages/NotFound"));


export function App() {

  const [sessions, setSessions] = useState<StudySession[]>([]);

  const handleAddSession = useCallback((session: StudySession) => {
    setSessions(prev => [...prev, session]);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddSession onAdd={handleAddSession} />} />
            <Route path="/session/:id" element={<SessionDetails sessions={sessions} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}