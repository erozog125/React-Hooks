import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Pages/Home/Home';
import {TryUseState} from './Components/Layouts/TryUseState/TryUseState';
import {TryUseCustom} from './Components/Layouts/TryUseCustom/TryUseCustom';
import {TryUseEffect} from './Components/Layouts/TryUseEffect/TryUseEffect';
import { RickAndMorty } from "./Components/Layouts/RickAndMorty/RickAndMorty";




function App() {
  return (    
    <div className="home-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<TryUseState />} />
          <Route path="/useCustom" element={<TryUseCustom />} />
          <Route path="/useEffect" element={<TryUseEffect />} />
          <Route path="/RickAndMorty" element={<RickAndMorty />} />
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;
