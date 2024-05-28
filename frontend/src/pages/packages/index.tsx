import Link from "next/link";
import { Card } from "../../components/card";

export default function Deploy() {
  return (
    <div className="flex flex-col  items-center ">
      <nav className="mx-10 px-8 py-4 my-3 flex  items-center bg-[#c0e8f7] rounded-full w-full max-w-[1516px] relative">
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
      <div className=" mt-10  border-[2px] border-[#94d3ea] px-5 py-2 rounded-full text-gray-800">
        <p className="font-[Roboto] text-xl font-semibold tracking-wide text-center">
          Packages are under development and we are very excited to launch them
          ASAP
        </p>
      </div>

      <div className="w-full max-w-[1400px] mt-20 px-10">
        <div className="w-full">
          <p className="text-[40px] font-bold">Explore Packages</p>
          <p className="text-[20px] mt-2 w-[800px]">
            The best place for move developers to explore packagess from
            world-class sui protocols & engineers — all pubishable with one
            click.
          </p>
        </div>
        <div className="w-full mt-10 flex item-center gap-10">
          <Card
            name={"Fungible Token"}
            msg={"Release your first token on SUI Chain"}
          />
          <Card
            name={"Non-Fungible  Token"}
            msg={"Release a collection of unique NFTS"}
          />
          <Card
            name={"Loyalty Tokens"}
            msg={"A package used for the creation of a loyalty tokens"}
          />
        </div>
      </div>
    </div>
  );
}
