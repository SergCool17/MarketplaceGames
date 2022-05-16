import React from "react";
import "./game-page.css";

const Iframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }
  console.log(source);
  const src = source;
  return (
    <iframe
      src={src}
      width={"90%"}
      heigth={"400px"}
      title={"Youtube Video Player"}
      frameBorder={0}
    ></iframe>
  );
};

export default Iframe;
