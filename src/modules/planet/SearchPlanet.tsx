import { useAppDispatch, useAppSelector } from 'store';
import { fetchPlanets } from './planetslice';

function SearchPlanet() {
  const dispatch = useAppDispatch();
  const { planetLoadStatus } = useAppSelector((state) => state.planetSlice);
  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (planetLoadStatus === 'LOADING') {
      return;
    }
    if (event.code === 'Enter') {
      const searchTerm = event.currentTarget.value.trim();
      if (searchTerm) {
        dispatch(fetchPlanets(`https://swapi.dev/api/planets/?search=${searchTerm}`));
      } else {
        dispatch(fetchPlanets());
      }
    }
  };
  return (
    <div className="max-w-lg ml-auto w-full">
      <div className="py-4 pr-4 pl-4 lg:pl-0">
        <input
          type="text"
          name="planet_search"
          disabled={planetLoadStatus === 'LOADING'}
          placeholder="Write a search term and press enter"
          className="w-full bg-bgsecondary  px-4 py-2 outline-none"
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </div>
  );
}

export default SearchPlanet;
