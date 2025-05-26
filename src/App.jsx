import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';

const pages = import.meta.glob('./pages/*.jsx', { eager: true });

function formatPath(path) {
  const fileName = path.split('/').pop().replace('.jsx', '');
  return fileName === 'Homepage' ? '/' : `/${fileName.toLowerCase()}`;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas que usam layout padrão */}
        <Route element={<MainLayout />}>
          {Object.entries(pages).map(([path, module]) => {
            const fileName = path.split('/').pop().replace('.jsx', '');

            // Evita colocar login e cadastro dentro do layout
            if (['Login', 'Cadastro'].includes(fileName)) return null;

            return (
              <Route
                key={path}
                path={formatPath(path)}
                element={module.default ? <module.default /> : null}
              />
            );
          })}
        </Route>

        {/* Rotas SEM layout padrão */}
        {Object.entries(pages).map(([path, module]) => {
          const fileName = path.split('/').pop().replace('.jsx', '');

          if (!['Login', 'Cadastro'].includes(fileName)) return null;

          return (
            <Route
              key={path}
              path={formatPath(path)}
              element={module.default ? <module.default /> : null}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}