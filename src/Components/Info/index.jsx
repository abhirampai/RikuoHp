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
      <div className="flex flex-col w-1/2 mx-auto space-y-6 text-2xl text-white border-r border-white-100">
        <div>
          <h1 className="text-xl font-bold xl:text-3xl">Since</h1>
          <h3 className="text-2xl text-gray-500 xl:text-4xl">
            <Counter from={0} to={1996} />
          </h3>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-3xl">Number of cars</h1>
          <h3 className="text-2xl text-gray-500 xl:text-4xl">
            <p className="flex">
              <Counter from={0} to={2874} />+
            </p>
          </h3>
        </div>
        <div>
          <h1 className="text-xl font-bold xl:text-3xl">
            Number of countries
          </h1>
          <h3 className="text-2xl text-gray-500 xl:text-4xl">
            <p className="flex">
              <Counter from={0} to={20} />+
            </p>
          </h3>
        </div>
      </div>
    </>
  );
};

export default React.memo(Info);
