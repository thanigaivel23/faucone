import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/HomePage/Home';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
