import { useRouter } from "next/router";
import {
  ConnectButton,
  useCurrentAccount,
  useSignAndExecuteTransactionBlock,
  useSuiClient,
} from "@mysten/dapp-kit";
import { useEffect, useState } from "react";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import Link from "next/link";
export default function Deploy() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [packageId, setPackageId]: any = useState();
  const [data, setData]: any = useState();
  const { hash } = router.query;
  const account = useCurrentAccount();
  const suiClient = useSuiClient();
  const { mutate: signAndExecute } = useSignAndExecuteTransactionBlock();

  const publish = async () => {
    try {
      setStarted(true);
      const tx = new TransactionBlock();
      const temp = {
        modules: data.modules,
        dependencies: data.dependencies,
      };
      const [upgradeCap] = tx.publish(temp);
      tx.transferObjects([upgradeCap], account!.address);
      signAndExecute(
        {
          transactionBlock: tx,
          options: {
            showEffects: true,
          },
          requestType: "WaitForLocalExecution",
        },
        {
          onSuccess: (tx) => {
            suiClient
              .waitForTransactionBlock({
                digest: tx.digest,
              })
              .then(() => {
                const objectId = tx.effects?.created?.[0]?.reference?.objectId;
                if (objectId) {
                  setPackageId(objectId);
                }
                setStarted(false);
              });
          },
        }
      );
    } catch (error) {
      console.log(error);
      setStarted(false);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://moccasin-golden-louse-556.mypinata.cloud/ipfs/${hash}`
      );
      const data = await response.json();
      const op = JSON.parse(data);
      setData(op);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (hash) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <nav className="mx-8 px-8 py-4 my-3 flex justify-between items-center bg-[#c0e8f7] rounded-full w-full max-w-[1516px] relative">
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
        <div className="flex   items-center gap-5 absolute right-[26px]">
          <p className=" rounded-md font-bold">Only On Devnet</p>
          <ConnectButton />
        </div>
      </nav>{" "}
      <div className="flex-grow flex flex-col items-center mt-60">
        {loading ? (
          <div className="flex flex-col items-center">
            <svg
              className="animate-spin  h-10 w-9 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-[14px] mt-4 text-gray-200 animate-pulse">
              Fetching data from pinata...
            </p>
          </div>
        ) : (
          <div>
            <div className="flex flex-col items-center gap-5">
              {packageId ? (
                <div className="flex gap-2 text-[18px] tracking-wide">
                  Your package was published at{" "}
                  <p
                    className="cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://suiscan.xyz/devnet/object/" + packageId
                      )
                    }
                  >
                    {packageId.slice(0, 10) + "..." + packageId.slice(-10)}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-5">
                  {account != null ? (
                    <div className="text-xl ">
                      Click this button to publish your package on sui devnet
                    </div>
                  ) : (
                    <div className="text-xl ">
                      Connect your wallet to Publish
                    </div>
                  )}
                  <button
                    className={`bg-blue-600 text-white text-lg px-8 py-2 rounded-lg ${
                      account != null
                        ? "bg-blue-600 hover:bg-blue-500"
                        : "bg-blue-400"
                    }`}
                    disabled={account == null || started}
                    onClick={publish}
                  >
                    {started ? "Publishing..." : "Publish"}
                  </button>{" "}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
