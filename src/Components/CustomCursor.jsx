import { useEffect, useRef } from "react";
import cursor from "../assets/cursor/images/pointer.png";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  const speed = 1.00; // 🔥 Increase this (0.3 → 0.6 = faster)

  useEffect(() => {
    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // LERP (smooth + fast)
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${pos.current.x}px, ${pos.current.y}px, 0)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>

      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-9999"
      >
        <img
          src={cursor}
          alt="cursor"
          className="w-8 h-8 drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]"
        />
      </div>
    </>
  );
}
