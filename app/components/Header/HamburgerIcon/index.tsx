import React from "react";
import classes from "./index.module.scss";
import { useHeaderProviderContext } from "@/context/HeaderProvider";

export const HamburgerIcon = () => {
  const { handleModal, menu } = useHeaderProviderContext();
  return (
    <div className={`hover:scale-105 transition`}>
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
            className={`${classes.line1} ${classes.hamburgerWrap} ${
              menu ? classes.active1 : ""
            } `}
            d="M2 7H22"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={`${classes.line2} ${classes.hamburgerWrap} ${
              menu ? classes.active2 : ""
            } `}
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
