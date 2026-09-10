"use client";

import * as React from "react";

export interface MagneticContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  tilt?: boolean;
  tiltStrength?: number;
}

export const MagneticContainer = React.forwardRef<
  HTMLDivElement,
  MagneticContainerProps
>(
  (
    {
      children,
      className = "",
      strength = 0.12,
      tilt = true,
      tiltStrength = 6,
      onMouseMove,
      onMouseLeave,
      style,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    const [transformState, setTransformState] = React.useState({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
    });
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!localRef.current) return;

      const rect = localRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      const normX = Math.max(-1, Math.min(1, offsetX / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, offsetY / (rect.height / 2)));

      const x = offsetX * strength;
      const y = offsetY * strength;

      const rotateY = tilt ? normX * tiltStrength : 0;
      const rotateX = tilt ? -normY * tiltStrength : 0;

      setTransformState({ x, y, rotateX, rotateY });
      setIsHovered(true);

      if (onMouseMove) {
        onMouseMove(e);
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      setTransformState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
      setIsHovered(false);
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    };

    return (
      <div
        ref={localRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          transform: `perspective(1200px) translate3d(${transformState.x}px, ${transformState.y}px, 0px) rotateX(${transformState.rotateX}deg) rotateY(${transformState.rotateY}deg)`,
          transition: isHovered
            ? "transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
          ...style,
        }}
        className={className}
        {...props}
      >
        {children}
      </div>
    );
  }
);

MagneticContainer.displayName = "MagneticContainer";
