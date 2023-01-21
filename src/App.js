import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/hp/hp.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<HomePage />} />
      <Route path="sign-in" element={<SignIn />} />
    </Route>
  </Routes>
);

export default App;

// react hooks - learn and use
//     use state
//     use effect
//     use memo
//     useref (input components) - search
// typescript - need to learn
// styled components - same as inline styles?
// async await
// JSX - passing properties, inline styles, more?
// array methods (map, filter) - basic pipelines
// redux will be mentioned so go over that
