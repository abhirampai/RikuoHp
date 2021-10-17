import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const Info = () => {
  function Counter({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 3,
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });

      return () => controls.stop();
    }, [from, to]);

    return <p ref={nodeRef} />;
  }
  return (
    <>
      <div className="flex flex-col w-1/2 mx-auto space-y-6 overflow-y-scroll text-2xl text-white ">
        <div>
          <h1 className="text-2xl font-bold xl:text-4xl">Since</h1>
          <h3 className="text-xl text-gray-500 xl:text-3xl">
            <Counter from={0} to={1996} />
          </h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold xl:text-4xl">Number of cars</h1>
          <h3 className="text-xl text-gray-500 xl:text-3xl">
            <p className="flex">
              <Counter from={0} to={2874} />
              <div class="loader-dots block relative w-20 h-5 mt-2 xl:mt-4">
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </p>
          </h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold xl:text-4xl">
            Number of countries
          </h1>
          <h3 className="text-xl text-gray-500 xl:text-3xl">
            <p className="flex">
              <Counter from={0} to={20} />
              <div class="loader-dots block relative w-20 h-5 mt-2 xl:mt-4">
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
                <div class="absolute top-0 mt-1 w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
            </p>
          </h3>
        </div>
      </div>
    </>
  );
};

export default React.memo(Info);
