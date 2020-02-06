import React, { useEffect, useState } from "react";

const getPos = (el, off) => {
  if (!el.current) return null;
  const size = el.current.getBoundingClientRect();
  if (typeof off === "function") {
    return off(el.currentt);
  }
  return { left: size.left + off.x, top: size.top + size.height + off.y };
};

export default ({
  point,
  color = "red",
  rotate = 60,
  offset = { x: 30, y: 2 }
}) => {
  const [position, setPosition] = useState(getPos(point, offset));
  useEffect(() => setPosition(getPos(point, offset)), [point]);
  if (!point.current) return null;
  return (
    <svg
      style={{
        position: "absolute",
        ...position,
        zIndex: 1000,
        transformOrigin: "top left",
        transform: `rotate(${rotate - 45}deg)`
      }}
    >
      <path d="M30,5 L2,2 L5,30" fill="none" stroke={color} stroke-width="4" />
      <path
        d="M 2 2 C 20 20, 40 35, 60 40"
        stroke={color}
        stroke-width="4"
        fill="transparent"
      />
    </svg>
  );
};
