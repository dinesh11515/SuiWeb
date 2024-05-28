import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
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
      <div className="mt-10 w-full  max-w-[1516px] flex flex-col  items-center gap-10">
        <div className="border-[2px] border-[#94d3ea] px-4 py-2 rounded-full text-gray-800">
          <p className="font-[Roboto] text-xl font-semibold tracking-wide text-center">
            Effortlessly create and publish your move packages with our tools
          </p>
        </div>
        <div className="w-full max-w-[1000px]  flex flex-col items-center ">
          <div>
            <div className="font-[Inter] text-[36px] font-bold flex flex-col items-center">
              <p>End-to-end tools</p>
              <p className="text-blue-600">for move package</p>
              <p className="text-blue-700">development and</p>
              <p className="text-blue-800">publishment</p>
            </div>
            <p className="w-[450px] text-lg text-gray-700 mt-6 text-center">
              Trusted and modular move packages that can be publsihed securely
              on SUI chain.
            </p>
            <div className="flex flex-col items-center">
              <div className="flex gap-10 items-center">
                <button
                  className="mt-10 px-6 py-3 bg-blue-300 rounded-xl text-lg font-bold tracking-wider hover:bg-blue-400"
                  onClick={() => router.push("/moveai")}
                >
                  Move AI
                </button>
                <button
                  className="mt-10 px-6 py-3 bg-blue-300 rounded-xl text-lg font-bold tracking-wider hover:bg-blue-400"
                  onClick={() => router.push("/deploy")}
                >
                  Packages
                </button>
                <button
                  className="mt-10 px-6 py-3 bg-blue-300 rounded-xl text-lg font-bold tracking-wider hover:bg-blue-400"
                  onClick={() => window.open("https://crates.io/crates/suiweb")}
                >
                  CLI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
