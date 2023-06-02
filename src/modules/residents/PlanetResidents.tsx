import CloseResidentButton from './CloseResidentButton';
import ResidentList from './ResidentList';

function PlanetResidents() {
  return (
    <section className="h-screen flex flex-col flex-1  md:w-1/2 absolute inset-0 md:static md:inset-full bg-bgsecondary">
      <CloseResidentButton />
      <h1 className="text-lg md:text-4xl p-4">Planet Residents</h1>
      <ResidentList />
    </section>
  );
}

export default PlanetResidents;
