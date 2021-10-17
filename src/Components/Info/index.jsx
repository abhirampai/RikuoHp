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
      <div className="flex flex-col items-center mt-4 space-y-6 text-2xl text-white md:items-start md:mx-auto md:w-1/2 md:border-r xl:mt-6 border-white-100">
        <div>
          <h1 className="ml-4 text-xl font-bold md:ml-0 xl:text-3xl">Since</h1>
          <h3 className="flex text-5xl text-gray-500">
            <p className="flex justify-center md:justify-start">
              <Counter from={0} to={1971} />
            </p>
          </h3>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-3xl">Number of cars</h1>
          <h3 className="text-5xl text-gray-500">
            <p className="flex justify-center md:justify-start">
              <Counter from={0} to={2874} />+
            </p>
          </h3>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-3xl">Number of countries</h1>
          <h3 className="text-5xl text-gray-500">
            <p className="flex justify-center md:justify-start">
              <Counter from={0} to={20} />+
            </p>
          </h3>
        </div>
      </div>
    </>
  );
};

export default React.memo(Info);
