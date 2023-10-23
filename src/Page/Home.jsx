import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <div className="flex flex-col bg-[url('building.jpg')] relative after:absolute after:top-0 after:w-full after:pointer-events-none after:h-full after:bg-[rgba(0,0,0,0.06)] bg-no-repeat bg-cover min-h-[650px] xl:min-h-[750px] bg-center">
        <Navbar />
        <div className="flex-grow bg-[rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mt-10  mx-auto text-center relative ">
            <h1 className="font-secondary text-5xl mb-4 text-white font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-primary text-black/90 font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              impedit eaque velit est nemo sapiente provident, ipsam quibusdam
              reiciendis iste! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus, nisi.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Home;
