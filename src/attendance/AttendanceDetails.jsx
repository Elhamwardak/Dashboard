import Icon from "../components/icons/Icons";

const AttendanceDetails = ({ onback }) => {
  return (
    <>
      <div className="space-y-4 px-10 py-5">
            <div
          className="w-10 flex justify-center items-center h-10 mb-4 text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          onClick={onback}
        >
          <Icon icon="back" />
        </div>
      </div>
    </>
  );
};

export default AttendanceDetails;
