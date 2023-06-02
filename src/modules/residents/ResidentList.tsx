import { EMPTY_ARRAY } from 'common/constants';
import { getPlanetByNameSelector } from 'modules/planet/planetslice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ResidentList() {
  const { planetName } = useParams();
  const planetDetails = useSelector((state) => getPlanetByNameSelector(state, planetName));
  const residentCount = planetDetails?.residents?.length || 0;
  if (residentCount <= 0) {
    return <div className="p-4">{planetDetails?.name} don't have any resident.</div>;
  }
  const residents = planetDetails?.residents || EMPTY_ARRAY;
  return <div className="p-4">
    <ul>
        {residents.map(resident=><li key={resident.url}></li>)}
    </ul>
  </div>;
}

export default ResidentList;
