"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export interface DataPoint {
  time: string;
  value: number;
  label: string;
}

interface InteractiveAreaChartProps {
  data?: DataPoint[];
  colorScheme?: "blue" | "purple";
  height?: number;
  isDark?: boolean;
}

interface Point {
  x: number;
  y: number;
  data: DataPoint;
}

const defaultData: DataPoint[] = [
  { time: "00:00", value: 1.92, label: "₹19.2L" },
  { time: "03:00", value: 2.05, label: "₹20.5L" },
  { time: "06:00", value: 1.98, label: "₹19.8L" },
  { time: "09:00", value: 2.22, label: "₹22.2L" },
  { time: "12:00", value: 2.10, label: "₹21.0L" },
  { time: "15:00", value: 2.28, label: "₹22.8L" },
  { time: "18:00", value: 2.44, label: "₹24.4L (Peak)" },
  { time: "21:00", value: 2.35, label: "₹23.5L" },
  { time: "24:00", value: 2.48, label: "₹24.8L" },
];

export default function InteractiveAreaChart({
  data = defaultData,
  colorScheme = "blue",
  height = 220,
  isDark: propIsDark,
}: InteractiveAreaChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(6); // Fixed peak point by default

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = propIsDark !== undefined ? propIsDark : mounted && resolvedTheme === "dark";

  // Calculate svg points & curve
  const width = 600;
  const chartHeight = height - 40;
  const paddingX = 40;
  const paddingY = 20;

  const minVal = 1.7;
  const maxVal = 2.6;

  const points: Point[] = data.map((d, i) => {
    const x = paddingX + (i / (data.length - 1)) * (width - paddingX * 2);
    const y =
      chartHeight +
      paddingY -
      ((d.value - minVal) / (maxVal - minVal)) * chartHeight;
    return { x, y, data: d };
  });

  // Generate smooth cubic bezier SVG path
  let linePath = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cp1x = prev.x + (curr.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (curr.x - prev.x) / 2;
    const cp2y = curr.y;
    linePath += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }

  const areaPath = `${linePath} L ${points[points.length - 1].x} ${
    chartHeight + paddingY
  } L ${points[0].x} ${chartHeight + paddingY} Z`;

  const activePoint = activeIndex !== null ? points[activeIndex] : null;

  return (
    <div className="relative w-full select-none">
      {/* SVG Canvas */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = ((e.clientX - rect.left) / rect.width) * width;
          let closestIdx = 0;
          let minDistance = Infinity;
          points.forEach((pt, idx) => {
            const dist = Math.abs(pt.x - mouseX);
            if (dist < minDistance) {
              minDistance = dist;
              closestIdx = idx;
            }
          });
          setActiveIndex(closestIdx);
        }}
      >
        <defs>
          {/* Light Mode Blue Gradient */}
          <linearGradient id="lightBlueAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Dark Mode Blue Gradient */}
          <linearGradient id="blueAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#06b6d4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal Y-Gridlines */}
        {[1.8, 2.0, 2.2, 2.4, 2.6].map((val, i) => {
          const y =
            chartHeight +
            paddingY -
            ((val - minVal) / (maxVal - minVal)) * chartHeight;
          return (
            <g key={i}>
              <line
                x1={paddingX - 10}
                y1={y}
                x2={width - paddingX + 10}
                y2={y}
                stroke={isDark ? "#334155" : "#e2e8f0"}
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <text
                x={paddingX - 15}
                y={y + 3}
                fill={isDark ? "#64748b" : "#94a3b8"}
                fontSize="10"
                textAnchor="end"
                fontFamily="sans-serif"
              >
                ₹{val.toFixed(1)}M
              </text>
            </g>
          );
        })}

        {/* Area Gradient Fill */}
        <path
          d={areaPath}
          fill={isDark ? "url(#blueAreaGrad)" : "url(#lightBlueAreaGrad)"}
        />

        {/* Smooth Curved Line */}
        <path
          d={linePath}
          fill="none"
          stroke={isDark ? "#38bdf8" : "#2563eb"}
          strokeWidth="3"
        />

        {/* Vertical Crosshair Line for Active Point */}
        {activePoint && (
          <line
            x1={activePoint.x}
            y1={paddingY}
            x2={activePoint.x}
            y2={chartHeight + paddingY}
            stroke={isDark ? "#06b6d4" : "#3b82f6"}
            strokeDasharray="3 3"
            strokeWidth="1.5"
            opacity="0.8"
          />
        )}

        {/* Data Point Circles without pulsing or sliding animations */}
        {points.map((pt, idx) => {
          const isActive = idx === activeIndex;
          return (
            <g key={idx} className="cursor-pointer" onClick={() => setActiveIndex(idx)}>
              {/* Outer Ring Circle */}
              {isActive && (
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="9"
                  fill={isDark ? "#38bdf8" : "#2563eb"}
                  fillOpacity="0.2"
                />
              )}
              {/* Main Point Circle */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isActive ? "5.5" : "3.5"}
                fill={
                  isActive
                    ? "#ffffff"
                    : isDark
                    ? "#0284c7"
                    : "#2563eb"
                }
                stroke={isDark ? "#38bdf8" : "#1d4ed8"}
                strokeWidth={isActive ? "2.5" : "1.5"}
              />
            </g>
          );
        })}

        {/* X-Axis Time Labels */}
        {points.map((pt, idx) => (
          <text
            key={idx}
            x={pt.x}
            y={height - 6}
            fill={
              idx === activeIndex
                ? isDark
                  ? "#ffffff"
                  : "#1e293b"
                : isDark
                ? "#64748b"
                : "#64748b"
            }
            fontSize="10"
            fontWeight={idx === activeIndex ? "bold" : "500"}
            textAnchor="middle"
            fontFamily="sans-serif"
          >
            {pt.data.time}
          </text>
        ))}
      </svg>

      {/* Static Floating Tooltip Card */}
      {activePoint && (
        <div
          className="absolute pointer-events-none -translate-x-1/2 -translate-y-full mb-3 z-20"
          style={{
            left: `${(activePoint.x / width) * 100}%`,
            top: `${(activePoint.y / height) * 100}%`,
          }}
        >
          <div className="bg-slate-900 text-white px-3.5 py-1.5 rounded-xl shadow-xl border border-slate-800 font-extrabold text-sm flex flex-col items-center gap-0.5 relative">
            <span>{activePoint.data.label}</span>
            <span className="text-[10px] font-medium text-slate-400">
              {activePoint.data.time} collection
            </span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-slate-900" />
          </div>
        </div>
      )}
    </div>
  );
}
