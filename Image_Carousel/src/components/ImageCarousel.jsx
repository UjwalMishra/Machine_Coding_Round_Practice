import { useEffect, useRef, useState } from "react";
import data from "../data.json";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const LEN = data.length;

  let intervalIdRef = useRef();

  const handlePrev = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return LEN - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const handleNext = () => {
    setIndex((prev) => {
      if (prev === LEN - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(handleNext, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalIdRef.current);
  };
  const handleMouseLeave = () => {
    intervalIdRef.current = setInterval(handleNext, 1000);
  };

  return (
    <div className="container">
      <div
        className="left-btn"
        onClick={handlePrev}
        onMouseEnter={handleMouseEnter}
      >
        {"<"}
      </div>
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={data[index].download_url}
        alt=""
      />
      <div
        className="right-btn"
        onClick={handleNext}
        onMouseEnter={handleMouseEnter}
      >
        {">"}
      </div>
    </div>
  );
};

export default ImageCarousel;
