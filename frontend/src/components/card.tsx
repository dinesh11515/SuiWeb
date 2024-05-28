import { FaArrowRight } from "react-icons/fa";

export const Card = ({ name, msg }: any) => {
  return (
    <div className="flex-1 border-[2px] border-[#94d3ea] px-4 py-4 rounded-xl text-gray-800 w-full flex flex-col gap-6">
      <p className="font-semibold text-xl">{name}</p>
      <p className=" text-md text-gray-800">{msg}</p>

      <button
        className="bg-white w-[110px] px-3 py-2 rounded-md  border-[1px] border-gray-300 flex items-center gap-2 "
        disabled
      >
        <p className="font-semibold text-lg">Publish</p>

        <FaArrowRight />
      </button>
    </div>
  );
};
