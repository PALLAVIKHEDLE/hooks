import React, { useState, useLayoutEffect, useRef } from "react";
import "./styles.css";

const ResizeableBox = () => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const boxRef = useRef();

  useLayoutEffect(() => {
    const measureBox = () => {
      if (boxRef.current) {
        const { width, height } = boxRef.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    };

    measureBox();

    window.addEventListener("resize", measureBox);
    //remove the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("resize", measureBox);
    };
  }, []);

  const handleResizeClick = () => {
    // Simulate changing box size
    const newWidth = Math.floor(Math.random() * 300) + 50;
    const newHeight = Math.floor(Math.random() * 300) + 50;
    boxRef.current.style.width = `${newWidth}px`;
    boxRef.current.style.height = `${newHeight}px`;
  };

  return (
    <div>
      <p>
        useLayoutEffect to perform the layout measurements before the browser
        repaint.
      </p>
      <ul>
        <li>Render the initial content.</li>
        <li>Measure the layout before the browser repaints the screen.</li>
        <li>
          Render the final content using the layout information you’ve read.
        </li>
      </ul>
      <p>
        useLayoutEffect blocks the browser from repainting, useEffect does not
        block the browser. If you’re on a slower device, you might notice that
        sometimes the object “flickers” and you briefly see its initial position
        before the corrected position.
      </p>

      <button onClick={handleResizeClick}>Resize Box</button>
      <div ref={boxRef} className="box"></div>
      {width !== null && height !== null && (
        <div>
          <p>Width: {width}px</p>
          <p>Height: {height}px</p>
        </div>
      )}
    </div>
  );
};

export default ResizeableBox;
