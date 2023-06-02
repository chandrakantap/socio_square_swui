import { useEffect } from 'react';
import { fetchPlanets } from './planetslice';
import { useAppDispatch, useAppSelector } from 'store';
import PlanetPager from './PlanetPager';
import Throbber from 'common/Throbber';
import { NavLink } from 'react-router-dom';
import SearchPlanet from './SearchPlanet';

function PlanetList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, [dispatch]);

  const { planetLoadStatus, planets } = useAppSelector((state) => state.planetSlice);

  return (
    <section className="h-screen flex flex-col w-full md:w-1/2  bg-bgprimary text-white">
      <h1 className="text-lg md:text-4xl p-4">Planets of Starwar Universe</h1>
      <SearchPlanet />
      <div className="flex flex-1 overflow-hidden relative">
        <div className="flex-1 overflow-y-auto py-2">
          <ul className="max-w-lg ml-auto">
            {planets.results.map((planet) => (
              <li className="listitem" key={planet.name}>
                <NavLink className="flex justify-between pr-4" to={`/${planet.name}`}>
                  <p>{planet.name}</p>
                  {planet?.residents?.length > 0 && (
                    <p className="badge">{planet?.residents?.length}</p>
                  )}
                </NavLink>
              </li>
            ))}
            {planetLoadStatus === 'SUCCESS' && planets.count === 0 && <li>No planet found.</li>}
          </ul>
        </div>
        {planetLoadStatus === 'LOADING' && <Throbber />}
      </div>
      <PlanetPager />
    </section>
  );
}

export default PlanetList;
