"use client";

/*import React, { useEffect, useRef, useState } from "react";
import classes from "./index.module.scss";
import useMouseTrailColor from "./usePixelColor/usePixelColor";

const MouseTrail = () => {
  const overlayRef = useRef(null);
  const mouseTrailRef = useRef(null);
  const [interacting, setInteracting] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const mouseTrailColor = useMouseTrailColor();

  useEffect(() => {
    const overlay = overlayRef.current;
    const mouseTrail = mouseTrailRef.current;

    const mouseMovement = (e) => {
      const x = e.clientX,
        y = e.clientY;

      mouseTrail.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    };

    const handleMouseMove = (e) => {
      const interactable =
        e.target && e.target.closest("[class*='interactable']");

      setInteracting(!!interactable);
      mouseMovement(e);
    };

    const handleHover = () => {
      setOnScreen(true);
    };

    const handleMouseLeave = () => {
      setOnScreen(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleHover);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleHover);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={classes.container}>
      <canvas ref={overlayRef} className={classes.overlay} />
      <div
        style={{
          width: interacting ? "76px" : "16px",
          height: interacting ? "76px" : "16px",
        }}
        className={[
          classes.cursor,
          onScreen ? classes.shown : classes.hidden,
        ].join(" ")}
      >
        <div
          ref={mouseTrailRef}
          className={[
            interacting ? classes.viewBubble : classes.smallBubble,
            classes.mouseTrail,
          ].join(" ")}
          style={{
            transition: "background-color 200ms linear",
            backgroundColor: mouseTrailColor,
          }}
        >
          {interacting && (
            <span
              style={{
                color: mouseTrailColor === "#FFFFFF" ? "#404041" : "#FFFFFF",
              }}
              className={classes.view}
            >
              view
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MouseTrail;
