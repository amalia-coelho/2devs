import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Outlet /> {/* Aqui entra o conteúdo da rota filha */}
      <Footer />
    </>
  );
}