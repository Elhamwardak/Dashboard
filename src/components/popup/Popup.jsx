
const Popup = ({ children, onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl relative">
          <button className="absolute top-2 right-3 text-xl" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
