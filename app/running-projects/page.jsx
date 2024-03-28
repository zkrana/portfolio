"use client";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RootLayout, { getPageMetadata } from "../layout";

function RunningProjects() {
  const pageMetadata = getPageMetadata("Running Projects");
  return (
    <RootLayout pageName="Running Projects || Quality work, Happy clients.">
      <Header />
      <section className="py-24 max-w-7xl mx-auto text-white bg-blueGray-50 overflow-hidden">
        <a
          href="/"
          className="logo-container hidden sm:flex justify-center font-bold text-4xl my-10 "
        >
          <div className="letter">L</div>
          <div className="letter">Y</div>
          <div className="letter">Z</div>
          <div className="letter">E</div>
          <div className="letter">R</div>
          <div className="letter">S</div>
          <div className="letter">L</div>
          <div className="letter">A</div>
          <div className="letter">B</div>
        </a>

        <h1 className="text-3xl font-bold my-6 text-center">
          Running Projects
        </h1>
        <p className="mb-4 max-w-3xl text-center mx-auto">
          At Lyzerslab, we are committed to protecting your privacy and ensuring
          the security of your personal information.
        </p>
        <div className="flex flex-col gap-5 r-pro-wrapper mt-9">
          <div className="r-pro-item flex flex-wrap justify-between items-center transition-all hover:shadow-md hover:shadow-white p-4 rounded-md border border-slate-400 relative">
            <div className="title sm:w-1/2 w-full flex flex-col ">
              <div className="r-pro-t w-16 py-1 absolute top-0.5 left-0.5 flex justify-center items-center shadow-md shadow:bg-red rounded-sm bg-green-300 p-2">
                <span className="block text-center text-sm text-sky-900">
                  Running
                </span>
              </div>
              <div className="content mt-5">
                <span className="block text-3xl mt-4"> Speaknix </span>
                <span className="text-xl flex gap-2 py-1 px-2  items-center mt-4">
                  {" "}
                  <span className="bg-gray-100 text-sm py-0.5 px-2 mt-1 text-slate-800 rounded-sm">
                    Company
                  </span>
                  Speaknix Group
                </span>
                <span className="text-xl flex gap-2 py-1 px-2  items-center mt-1">
                  {" "}
                  <span className="bg-gray-100 text-sm py-0.5 px-2 mt-1 text-slate-800 rounded-sm">
                    Type
                  </span>
                  Text to Speech Conversion
                </span>
                <span className="text-xl flex gap-2 py-1 px-2  items-center mt-1">
                  {" "}
                  <span className="bg-gray-100 text-sm py-0.5 px-2 mt-1 text-slate-800 rounded-sm">
                    Stack
                  </span>
                  NEXT JS, FAST API, MONGODB.
                </span>
              </div>
            </div>
            {/* <div className="sideC sm:w-1/2 w-full h-full p-5 border border-slate-300 rounded-md">
              <span className="total-b"></span>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </RootLayout>
  );
}

export default RunningProjects;
