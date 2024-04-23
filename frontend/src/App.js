import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';

// Import pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route 
          path='/'
          element={<Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
