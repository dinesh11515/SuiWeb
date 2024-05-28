import Link from "next/link";

export default function Deploy() {
  return (
    <div className="flex flex-col  items-center ">
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
    </div>
  );
}
