import React from "react";

const ControlsOverlay = () => {
  return (
    <div className="absolute top-5 right-5 z-50 bg-black/70 text-white p-4 rounded-lg">
      <h2 className="font-bold mb-2">Controls</h2>

      <p>WASD → Move</p>
      <p>Mouse → Look Around</p>
      <p>E → Inspect Mineral</p>
      <p>ESC → Unlock Mouse</p>
    </div>
  );
};

export default ControlsOverlay;