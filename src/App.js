import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Pages/Home/Home';
import {TryUseState} from './Components/Layouts/TryUseState/TryUseState';
import {TryUseCustom} from './Components/Layouts/TryUseCustom/TryUseCustom';
import {TryUseEffect} from './Components/Layouts/TryUseEffect/TryUseEffect';



function App() {
  return (    
    <div className="home-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<TryUseState />} />
          <Route path="/useCustom" element={<TryUseCustom />} />
          <Route path="/useEffect" element={<TryUseEffect />} />
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
