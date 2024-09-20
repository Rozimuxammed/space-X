import React from "react";

function Main() {
  return (
    <main>
      <section className="py-28">
        <div className="container m-auto flex items-center justify-center text-white sm:flex-col lg:flex-row">
          <div className="w-2/4 sm:w-full md:px-10 sm:px-3">
            <h1 className="text-2xl mb-10">Falcon Heavy <br /> Overview</h1>
            <div className="flex items-center gap-28 mb-24 sm:mb-18 sm:gap-10">
              <ul className="text-[16px] leading-9 font-normal sm:text-xs lg:text-sm">
                <li>HEIGHT</li>
                <li>DIAMETER</li>
                <li>MASS</li>
                <li>PAYLOAD TO LEO</li>
                <li>PAYLOAD TO GTO </li>
                <li>PAYLOAD TO MARS</li>
              </ul>
              <ul className="text-[16px] leading-9 font-normal sm:text-xs lg:text-sm">
                <li>
                  70 m / <span className="text-grey">229.6 ft</span>
                </li>
                <li>
                  12.2 m / <span className="text-grey">39.9 ft</span>
                </li>
                <li>
                  1,420,788 kg / <span className="text-grey">3,125,735 lb</span>
                </li>
                <li>
                  63,800 kg / <span className="text-grey">140,660 lb</span>
                </li>
                <li>
                  26,700 kg / <span className="text-grey">58,860 lb</span>
                </li>
                <li>
                  16,800 kg / <span className="text-grey">37,040 lb</span>
                </li>
              </ul>
            </div>
            <div className="sm:mb-16">
              <h1 className="text-2xl mb-12 sm:mb-9">UNMATCHED <br /> PERFORMANCE</h1>
              <p className="text-[16px] font-normal leading-7 w-[500px] sm:text-sm sm:w-full lg:text-lg">
                With more than 5 million pounds of thrust at liftoff, Falcon
                Heavy is the most capable rocket flying. By comparison, the
                liftoff thrust of the Falcon Heavy equals approximately eighteen
                747 aircraft at full power. Falcon Heavy can lift the equivalent
                of a fully loaded 737 jetliner—complete with passengers, luggage
                and fuel—to orbit.
              </p>
            </div>
          </div>
          <div className="">
            <img src="./public/raceta.png" alt="raceta image" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
