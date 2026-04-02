import { Route, Routes } from 'react-router-dom';
import { DocsPage } from './pages/DocsPage';
import { HomePage } from './pages/HomePage';
import { SupportPage } from './pages/SupportPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
  );
}
