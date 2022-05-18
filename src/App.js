import './App.css';
import Data from './component/Data';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import GraphicLook from './component/GraphicLook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Graphics" element={<GraphicLook />} />
        <Route path="/Ingress" element={<Data />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
