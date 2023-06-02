import { useParams } from 'react-router-dom';
import CloseResidentButton from './CloseResidentButton';
import ResidentList from './ResidentList';
import { getPlanetByNameSelector } from 'modules/planet/planetslice';
import { useSelector } from 'react-redux';

function PlanetResidents() {
  // get selected planetName from URL
  const { planetName } = useParams();

  // Get the plaent details from redux using the selector
  const planetDetails = useSelector((state) => getPlanetByNameSelector(state, planetName));

  return (
    <section className="h-screen flex flex-col flex-1  md:w-1/2 absolute inset-0 md:static md:inset-full bg-bgsecondary">
      <CloseResidentButton />
      <h1 className="text-lg md:text-4xl p-4">
        Planet <span className="font-medium text-green-400">{planetDetails?.name}</span> Residents
      </h1>
      <ResidentList planetDetails={planetDetails} />
    </section>
  );
}

export default PlanetResidents;
