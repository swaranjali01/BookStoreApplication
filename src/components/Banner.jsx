import React from 'react';
import  banner from "../assets/banner.png"

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row my-10 items-center">
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsam in obcaecati ipsum illum consequuntur quaerat
            dolore porro eveniet sed harum, ut sunt, hic nulla deleniti vero cum omnis doloremque.
          </p>
          <div>
            <label className="input input-bordered flex items-center gap-2 border p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow px-2" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary px-6 py-2 rounded-md bg-pink-500 text-white">Get Started</button>
        </div>
      </div>

      <div className="w-full md:w-1/2 order-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={banner}
          className="w-full md:w-[550px] h-auto md:h-[460px]"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default Banner;
