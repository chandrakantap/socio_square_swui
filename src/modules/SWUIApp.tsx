import { Route, Routes } from 'react-router-dom';
import PlanetList from './planet/PlanetList';
import PlanetResidents from './residents/PlanetResidents';
import NoPlanetSelected from './planet/NoPlanetSelected';

function SWUIApp() {
  return (
    <div className="swuiapp flex h-screen bg-bgsecondary text-white">
      <PlanetList />
      <Routes>
        <Route path="/" element={<NoPlanetSelected />} />
        <Route path="/:planetName" element={<PlanetResidents />} />
      </Routes>
    </div>
  );
}

export default SWUIApp;
