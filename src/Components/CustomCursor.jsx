import { useEffect, useRef } from "react";
import cursor from "../assets/cursor/images/pointer.png";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  const smoothness = 0.12;

  useEffect(() => {
    // ❌ Disable on touch devices
    if ("ontouchstart" in window) return;

    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!visible.current && cursorRef.current) {
        visible.current = true;
        cursorRef.current.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      visible.current = false;
    };

    const showCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
      visible.current = true;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * smoothness;
      pos.current.y += (mouse.current.y - pos.current.y) * smoothness;

      if (cursorRef.current && visible.current) {
        cursorRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hideCursor();
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      {/* Hide system cursor */}
      <style>
        {`
          * {
            cursor: none !important;
          }
        `}
      </style>

      <div
        ref={cursorRef}
        className="custom-glow-cursor"
        style={{ "--cursor-image": `url(${cursor})` }}
      />
    </>
  );
}
