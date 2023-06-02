import { useAppDispatch, useAppSelector } from 'store';
import { fetchPlanets } from './planetslice';
import React from 'react';

/**
 * This is the component to renders the plaent pager part.
 */
function PlanetPager() {
  const dispatch = useAppDispatch();
  const { planetLoadStatus, planets } = useAppSelector((state) => state.planetSlice);

  /**
   * Handler for changing page
   * Previous and Next button has name attribute.
   * This handler will identify the action(nextPage or previousPage) from that name and
   * call fetchPlanets with appropriate URL.
   * URL for nextPage and previousPage comes as response from swapi api which is stored in redux
   * @param event ClickEvent on Previous and NextButton
   * @returns
   */
  const changePage = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    if (planetLoadStatus === 'LOADING') {
      // Do not load if current call in progress.
      return;
    }
    const name = event.currentTarget.name;
    if (name === 'previous' && planets.previous) {
      dispatch(fetchPlanets(planets.previous));
    } else if (name === 'next' && planets.next) {
      dispatch(fetchPlanets(planets.next));
    }
  };

  /**
   * This is memoized currentPage data extracted from
   * either nextPage URL or previousPageURL
   */
  const currentPage = React.useMemo(() => {
    if (planets?.previous) {
      const previousPage = new URL(planets.previous).searchParams.get('page');
      return Number(previousPage) + 1;
    } else if (planets?.next) {
      const nextPage = new URL(planets.next).searchParams.get('page');
      return Number(nextPage) - 1;
    }
    return 1;
  }, [planets?.previous, planets?.next]);

  return (
    <div className="pagination p-4 flex justify-between text-lg w-full">
      <button
        className="border-none"
        disabled={planets.previous === null}
        name="previous"
        onClick={changePage}
      >
        &lt; Previous
      </button>
      <h4>Page: {currentPage}</h4>
      <button
        className="border-none"
        disabled={planets.next === null}
        name="next"
        onClick={changePage}
      >
        Next &gt;
      </button>
    </div>
  );
}
export default PlanetPager;
