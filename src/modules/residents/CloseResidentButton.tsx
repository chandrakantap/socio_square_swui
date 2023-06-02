import { useNavigate } from 'react-router-dom';
function CloseResidentButton() {
  const navigate = useNavigate();
  const goToList = () => navigate('/');
  return (
    <button
      className="absolute md:hidden w-6 h-6 rounded-full border border-white right-4 top-4"
      onClick={goToList}
    >
      X
    </button>
  );
}
export default CloseResidentButton;
