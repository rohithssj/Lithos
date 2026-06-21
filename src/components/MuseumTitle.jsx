import React from "react";
import { Html } from "@react-three/drei";

const MuseumTitle = () => {
  return (
    <Html position={[-2, 8, -14]}>
      <h1
        style={{
          color: "white",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        LITHOS
      </h1>
    </Html>
  );
};

export default MuseumTitle;