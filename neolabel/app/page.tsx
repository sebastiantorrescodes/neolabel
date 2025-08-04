import "@/app/ui/global.css";
import Image from "next/image";
import Link from "next/link";
// import NavBar from "@/app/ui/homepage/navbar";

export default function Page() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex h-screen items-center justify-center px-6">
        <div className="flex max-w-7xl w-full flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="py-6 text-5xl font-semibold text-black">
              WELCOME TO <span className="text-primary">NEOLABEL</span>
            </h1>
            <p className="text-2xl font-medium text-black">
              Intelligently Rename Your Photos Using AI By Extracting Key
              Metadata and Subject For Clean, Organized Filenames.
            </p>
            <div className="flex gap-5">
              <Link
                href="/features"
                className="w-50 flex items-center justify-center rounded-3xl bg-primary p-3 mt-6 text-sm font-medium text-white shadow-xl"
              >
                <span>Explore Features</span>
              </Link>
              <Link
                href="/login"
                className="w-40 flex items-center justify-center rounded-3xl bg-primary p-3 mt-6 text-sm font-medium text-white shadow-xl"
              >
                <span>Get Started</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* <Image
              src="/neoLabelHero.svg"
              width={600}
              height={600}
              className="w-full max-w-md"
              alt="Screenshots of the dashboard project showing desktop version"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
