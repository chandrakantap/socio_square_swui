function Throbber() {
  return (
    <div className="maskParent flex flex-col items-center justify-center">
      <div className="maskParent bg-gray-800 opacity-80" />
      <div
        className={`
            relative
            border-white
            border-r-transparent
            animate-spin 
            inline-block
            w-16 h-16 border-4 
            rounded-full`}
      ></div>
      <h4 className="text-white relative">Loading..</h4>
    </div>
  );
}
export default Throbber;
