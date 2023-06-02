import { EMPTY_ARRAY } from 'common/constants';
import NoPlanetSelected from 'modules/planet/NoPlanetSelected';
import ResidentListItem from './ResidentListItem';
import { Planet } from 'common/types';
import React, { useEffect } from 'react';
import ResidentPager from './ResidentPager';

function ResidentList(props: { planetDetails?: Planet }) {
  const { planetDetails } = props;
  const [page, setPage] = React.useState<number>(1);

  useEffect(() => {
    // Reset page when different planet selected
    setPage(1);
  }, [planetDetails]);

  const residents = planetDetails?.residents || EMPTY_ARRAY;
  const noOfResidents = React.useMemo(() => residents.length, [residents]);

  if (!planetDetails?.name) {
    return <NoPlanetSelected />;
  }

  // if resident count is 0 show information message
  if (noOfResidents <= 0) {
    return (
      <div className="p-4">
        Planet <span className="text-lg font-medium text-green-400">{planetDetails?.name}</span>{' '}
        don't have any resident.
      </div>
    );
  }

  const pageStart = (page - 1) * 10;
  const pageEnd = page * 10;

  return (
    <div className="p-4">
      <ul className="residentList min-h-[400px]">
        {residents.slice(pageStart, pageEnd).map((resident) => (
          <ResidentListItem key={resident} url={resident} />
        ))}
      </ul>
      {(page > 1 || pageEnd < noOfResidents) && (
        <ResidentPager currentPage={page} totalCount={noOfResidents} setPage={setPage} />
      )}
    </div>
  );
}

export default ResidentList;
