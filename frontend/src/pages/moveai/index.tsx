import { useAssistant } from "ai/react";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";

export default function Moveai() {
  const [moveAssistant, setMoveAssistant] = useState(true);

  const {
    status: moveQnStatus,
    messages: moveQnMessages,
    input: moveQnInput,
    submitMessage: moveSubmit,
    handleInputChange: moveHandle,
  } = useAssistant({ api: "/api/move" });

  const {
    status: suiQnStatus,
    messages: suiQnMessages,
    input: suiQnInput,
    submitMessage: suiSubmit,
    handleInputChange: suiHandle,
  } = useAssistant({ api: "/api/sui" });

  const submit = async () => {
    if (moveAssistant) {
      moveSubmit();
    } else {
      // console.log("solidity")
      suiSubmit();
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  console.log(moveQnMessages);
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
      <div className=" flex  flex-col items-center  rounded-full w-full max-w-[1516px] mt-4">
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
      <div className=" h-full w-full max-w-[1216px] flex flex-col-reverse items-center gap-10">
        <div className="flex items-center  bg-white px-4 py-3 rounded-full w-full max-w-[1016px] text-2xl">
          <input
            placeholder={
              moveAssistant
                ? "Type any question related to Move"
                : "Type any question related to SUI"
            }
            value={moveAssistant ? moveQnInput : suiQnInput}
            onChange={moveAssistant ? moveHandle : suiHandle}
            onKeyPress={handleKeyPress}
            className="focus:outline-none w-full ml-1 text-[16px] tracking-wide"
          ></input>
          <BsArrowUpCircleFill
            className="cursor-pointer text-3xl"
            onClick={submit}
          />
        </div>
        {moveAssistant && moveQnMessages.length == 0 && (
          <div className="text-center flex items-center tracking-wider text-[20px] font-semibold  h-full gap-4">
            Have any questions related to Move?, Ask the specially trained MOVE
            Assitant!
            <FaMagic />
          </div>
        )}
        {!moveAssistant && suiQnMessages.length == 0 && (
          <div className="text-center flex items-center tracking-wider text-[20px] font-semibold  h-full gap-4">
            Have any questions related to SUI?, Ask the specially trained SUI
            Assitant!
            <FaMagic />
          </div>
        )}

        {moveAssistant && moveQnMessages.length > 0 && (
          <div
            className="h-full max-h-[600px] w-full max-w-[1016px] overflow-y-scroll flex flex-col-reverse"
            id="scroll"
          >
            {moveQnMessages
              .slice()
              .reverse()
              .map((m: any) => (
                <div key={m.id} className="flex flex-col items-center w-full">
                  {m.role !== "data" &&
                    (m.role == "user" ? (
                      <div className={`w-full flex justify-end `}>
                        <p className="bg-[#c5ebf8] rounded-xl px-3 py-2 my-2">
                          {m.content}
                        </p>
                      </div>
                    ) : (
                      <div className={`w-full flex `}>
                        <p className="bg-[#c5ebf8] rounded-xl px-3 py-2 my-2">
                          {m.content}
                        </p>
                      </div>
                    ))}
                  {/* {m.role === "data" && (
                    <div className="w-full text-start">
                      {(m.data as any).description}
                      <br />
                      <pre className={"bg-gray-200"}>
                        {JSON.stringify(m.data, null, 2)}
                      </pre>
                    </div>
                  )} */}
                </div>
              ))}
          </div>
        )}

        {!moveAssistant && suiQnMessages.length > 0 && (
          <div
            className="h-full max-h-[600px] w-full max-w-[1016px] overflow-y-scroll flex flex-col-reverse"
            id="scroll"
          >
            {suiQnMessages
              .slice()
              .reverse()
              .map((m: any) => (
                <div key={m.id} className="flex flex-col items-center w-full">
                  {m.role !== "data" &&
                    (m.role == "user" ? (
                      <div className={`w-full flex justify-end `}>
                        <p className="bg-[#c5ebf8] rounded-xl px-3 py-2 my-2">
                          {m.content}
                        </p>
                      </div>
                    ) : (
                      <div className={`w-full flex `}>
                        <p className="bg-[#c5ebf8] rounded-xl px-3 py-2 my-2">
                          {m.content}
                        </p>
                      </div>
                    ))}
                  {/* {m.role === "data" && (
                  <div className="w-full text-start">
                    {(m.data as any).description}
                    <br />
                    <pre className={"bg-gray-200"}>
                      {JSON.stringify(m.data, null, 2)}
                    </pre>
                  </div>
                )} */}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
