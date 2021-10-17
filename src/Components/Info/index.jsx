import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const Info = () => {
  function Counter({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 5,
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
      <div className="flex flex-col w-full mx-auto space-y-6 text-2xl text-white">
        <div>
          <h1 className="text-4xl font-bold">Year</h1>
          <h3 className="text-gray-500">
            <Counter from={0} to={1996} />
          </h3>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Number Of Cars</h1>
          <h3 className="text-gray-500">
            <Counter from={0} to={36} />
          </h3>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Number Of Countries</h1>
          <h3 className="text-gray-500">
            <Counter from={0} to={20} />
          </h3>
        </div>
      </div>
    </>
  );
};

export default Info;
