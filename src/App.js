import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/hp/hp.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in-container/sign-in.component.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="shop" element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;
