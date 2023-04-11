import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/hp/hp.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="shop" element={<Authentication />} />
    </Route>
  </Routes>
);

export default App;
