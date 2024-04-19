import './App.css';
import Home from './pages/Home/Home.js'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Navigate to="/Home" />} />
      <Route default path="/Home" element={<Home />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
