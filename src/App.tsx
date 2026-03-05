import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

export default function App() {
  // Determine basename: if we're in a subdirectory named 'paramount', use it.
  // Otherwise default to root. This handles both Hostinger and local testing.
  const basename = window.location.pathname.includes('/paramount') ? '/paramount' : '/';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </Router>
  );
}
