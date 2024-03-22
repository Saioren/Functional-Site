import React from "react";
import classes from "./index.module.scss";

type HamburgerIconProps = {
  menu: boolean;
  handleModal: any;
};

export const HamburgerIcon = ({ menu, handleModal }: HamburgerIconProps) => {
  return (
    <div
      className={`${classes.hamburgerWrap} ${
        menu ? classes.active : ""
      } hover:scale-105 transition`}
    >
      <button
        className={`${classes.handleModal} stroke-gray-900 dark:stroke-white `}
        onClick={() => handleModal()}
      >
        <svg
          viewBox="0 0 24 24"
          width="48"
          height="48"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={classes.line1}
            d="M2 7H22"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={classes.line2}
            d="M2 17H22"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
