import type { CSSProperties } from "react";

type IconProps = {
  className?: string;
  delay?: number;
};

const drawStyle = (delay = 0): CSSProperties => ({
  transitionDelay: `${delay}ms`,
});

export function NeedleThreadIcon({ className, delay }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path
        pathLength={1}
        className="draw-path"
        d="M12 52 C 18 46, 24 38, 30 30 C 36 22, 40 16, 44 11"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle(delay)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M44 11 C 47.5 7.5, 51 9, 49.5 12.5 C 48 16, 44.5 14, 46 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle(delay)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M12 52 C 8 50, 4 52, 5 46 C 6 40, 11 44, 8 40 C 5 36, 10 33, 9 28"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeOpacity="0.7"
        style={drawStyle((delay ?? 0) + 150)}
      />
    </svg>
  );
}

export function ScissorsIcon({ className, delay }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
      <circle
        cx="16"
        cy="46"
        r="6"
        pathLength={1}
        className="draw-path"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle(delay)}
      />
      <circle
        cx="16"
        cy="22"
        r="6"
        pathLength={1}
        className="draw-path"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle((delay ?? 0) + 80)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M21 25 L 52 50"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle((delay ?? 0) + 160)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M21 43 L 52 18"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle((delay ?? 0) + 240)}
      />
    </svg>
  );
}

export function MeasuringTapeIcon({ className, delay }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path
        pathLength={1}
        className="draw-path"
        d="M6 22 C 16 12, 48 12, 58 22 C 48 32, 16 32, 6 22 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle(delay)}
      />
      {[14, 22, 30, 38, 46].map((x, i) => (
        <path
          key={x}
          pathLength={1}
          className="draw-path"
          d={`M${x} ${i % 2 === 0 ? 15 : 29} L${x} ${i % 2 === 0 ? 19 : 25}`}
          stroke="currentColor"
          strokeWidth="1.1"
          strokeOpacity="0.7"
          style={drawStyle((delay ?? 0) + 200 + i * 60)}
        />
      ))}
      <path
        pathLength={1}
        className="draw-path"
        d="M32 32 C 30 40, 30 46, 32 52"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeOpacity="0.7"
        style={drawStyle((delay ?? 0) + 500)}
      />
    </svg>
  );
}

export function PatternPieceIcon({ className, delay }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path
        pathLength={1}
        className="draw-path"
        d="M20 8 C 24 14, 28 10, 32 9 C 36 10, 40 14, 44 8 L 50 16 L 45 22 L 50 30 L 46 52 L 18 52 L 14 30 L 19 22 L 14 16 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        style={drawStyle(delay)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M24 24 L 24 46"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
        style={drawStyle((delay ?? 0) + 200)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M40 24 L 40 46"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
        style={drawStyle((delay ?? 0) + 260)}
      />
    </svg>
  );
}

export function SewingMachineIcon({ className, delay }: IconProps) {
  return (
    <svg viewBox="0 0 160 120" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
      <path
        pathLength={1}
        className="draw-path"
        d="M18 96 C 18 74, 30 60, 30 44 C 30 30, 40 20, 56 20 C 70 20, 78 26, 118 26 C 132 26, 140 34, 140 46 C 140 56, 132 62, 122 62 L 100 62"
        stroke="currentColor"
        strokeWidth="1.6"
        style={drawStyle(delay)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M100 62 C 96 62, 92 66, 92 72 L 92 80"
        stroke="currentColor"
        strokeWidth="1.6"
        style={drawStyle((delay ?? 0) + 150)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M10 96 L 150 96"
        stroke="currentColor"
        strokeWidth="1.6"
        style={drawStyle((delay ?? 0) + 300)}
      />
      <circle
        cx="118"
        cy="44"
        r="10"
        pathLength={1}
        className="draw-path"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.8"
        style={drawStyle((delay ?? 0) + 400)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M92 80 C 92 88, 84 92, 84 98"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        style={drawStyle((delay ?? 0) + 550)}
      />
      <path
        pathLength={1}
        className="draw-path"
        d="M40 44 C 44 50, 44 56, 40 62 C 36 68, 36 74, 40 80"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
        style={drawStyle((delay ?? 0) + 650)}
      />
    </svg>
  );
}

export function StitchDivider({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 12" preserveAspectRatio="none" className={className} aria-hidden="true">
      <line
        x1="0"
        y1="6"
        x2="240"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="8 7"
        strokeLinecap="round"
      />
    </svg>
  );
}
