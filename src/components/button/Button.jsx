
const Button = ({onClick, type, title}) => {
  return (
    <>
      <button onClick={onClick} type={type} className="w-full uppercase text-sm font-semibold bg-blue-800 text-white px-4 py-2 rounded-md shadow hover:bg-white hover:text-black hover:scale-100 hover:shadow-lg transition-all duration-200 ease-in-out">
        {title}
      </button>
    </>
  );
};

export default Button;
