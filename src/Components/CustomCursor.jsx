import { useEffect, useRef } from "react";
import { useCursor } from "./CursorContext";
import cursor from "../assets/cursor/images/pointer.png";

export default function CustomCursor() {
  const { cursorEnabled } = useCursor();
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const smoothness = 0.12;

  useEffect(() => {
    if (!cursorEnabled) return;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      cursorRef.current.style.opacity = "1";
    };

    const hide = () => (cursorRef.current.style.opacity = "0");

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * smoothness;
      pos.current.y += (mouse.current.y - pos.current.y) * smoothness;

      cursorRef.current.style.transform =
        `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", hide);
    animate();

    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
  }, [cursorEnabled]);

  if (!cursorEnabled) return null;

  return (
    <>
      <style>
        {`* { cursor: none !important; }`}
      </style>

      <div
        ref={cursorRef}
        className="custom-glow-cursor"
        style={{ "--cursor-image": `url(${cursor})` }}
      />
    </>
  );
}
