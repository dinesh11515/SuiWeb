import Link from "next/link";
import { useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function Moveai() {
  const [moveAssistant, setMoveAssistant] = useState(true);
  return (
    <div className="flex flex-col  items-center h-screen pb-[4%]">
      <nav className="mx-8 px-8 py-4 my-3 flex  items-center bg-[#c0e8f7] rounded-full w-full max-w-[1516px] relative">
        <Link
          className="font-[Acme] text-[30px] tracking-wider absolute"
          href={"/"}
        >
          SuiWeb
        </Link>
        <div className="flex flex-col items-center  w-full ">
          <div className="font-[Acme] text-[22px] tracking-wider flex gap-10  items-center">
            <Link href={"/moveai"}>Move AI</Link>
            <Link href={"/packages"}>Packages</Link>
          </div>
        </div>
        <div className=" absolute right-[26px]">
          <button
            className="bg-white rounded-xl w-32 px-3 py-2 font-[Roboto] font-bold text-[16px] tracking-wider hover:bg-gray-200"
            onClick={() => window.open("https://crates.io/crates/suiweb")}
          >
            Install CLI
          </button>
        </div>
      </nav>
      <div className=" flex  flex-col items-center  rounded-full w-full max-w-[1516px] mt-10">
        <div className="  rounded-full  border-[2px] border-[#94d3ea] flex items-center ">
          <button
            className={`${
              moveAssistant && "bg-white"
            } rounded-full px-4 py-2 text-lg font-semibold tracking-wider`}
            onClick={() => setMoveAssistant(true)}
          >
            Move Assistant
          </button>
          <button
            className={`${
              !moveAssistant && "bg-white"
            } rounded-full px-4 py-2 text-lg font-semibold tracking-wider`}
            onClick={() => setMoveAssistant(false)}
          >
            SUI Assistant
          </button>
        </div>
      </div>
      <div className=" h-full w-full max-w-[1216px] flex flex-col items-center">
        <div className="h-full w-full max-w-[1216px]">chat</div>
        <div className="flex items-center  bg-white px-4 py-3 rounded-full w-full max-w-[1016px] text-2xl">
          <input
            placeholder={
              moveAssistant
                ? "Type Any Question Related To Move"
                : "Type Any Question Related To SUI"
            }
            className="focus:outline-none w-full ml-1 text-[16px] tracking-wide"
          ></input>
          <BsArrowUpCircleFill className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
