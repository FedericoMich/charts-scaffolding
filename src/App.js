import { Routes, Route } from 'react-router-dom';

// Route view
import Home from './view/Home/Home';
// Styles
import './styles/styles.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
