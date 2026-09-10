"use client";
import * as React from "react";

export interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  range?: number;
}

export const MagneticButton = React.forwardRef<
  HTMLButtonElement,
  MagneticButtonProps
>(({ children, className = "", strength = 0.35, range = 120, onMouseMove, onMouseLeave, style, ...props }, ref) => {
  const localRef = React.useRef<HTMLButtonElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLButtonElement);

  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!localRef.current) return;

    const { left, top, width, height } = localRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
    setIsHovered(true);

    if (onMouseMove) {
      onMouseMove(e);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  return (
    <button
      ref={localRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: isHovered
          ? "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)"
          : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1.2)",
        willChange: "transform",
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
});

MagneticButton.displayName = "MagneticButton";
