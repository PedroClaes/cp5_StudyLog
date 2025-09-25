import { Outlet, Link } from "react-router-dom";
export function MainLayout() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <nav className="mb-4 flex gap-4">
        <Link to="/" className="text-blue-600">Início</Link>
        <Link to="/add" className="text-green-600">Adicionar</Link>
      </nav>
      <Outlet />
    </div>
  );
}