import classNames from "classnames";
import React from "react";
import "./button.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--small": size === "s",
    "btn--medium": size === "m",
    btn: true,
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
