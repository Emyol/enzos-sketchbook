"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import type { TargetAndTransition, Transition } from "framer-motion";

const CHERRY = "#E63946";
const SUNSHINE = "#FFD166";
const SKY = "#118AB2";

// ── SVG crayon shapes ────────────────────────────────────────────────────────

function CrayonStar({ color, size = 52 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      {/* Slightly imperfect 5-pt star for hand-drawn feel */}
      <path
        d="M26 4 L31 19 L47 19 L35 29 L39 44 L26 35 L13 44 L17 29 L5 19 L21 19 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.28"
      />
    </svg>
  );
}

function CrayonHeart({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 11 C24 8 29 5 33 6 C40 7 44 13 42 19 C40 28 32 35 24 42 C16 35 8 28 6 19 C4 13 8 7 15 6 C19 5 24 8 24 11 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.22"
      />
    </svg>
  );
}

function CrayonSquiggle({ color }: { color: string }) {
  return (
    <svg width="96" height="34" viewBox="0 0 96 34" fill="none" aria-hidden="true">
      <path
        d="M3 17 C13 3 23 31 33 17 C43 3 53 31 63 17 C73 3 83 24 93 17"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CrayonSpiral({ color }: { color: string }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path
        d="M28 28 C28 23 33 18 38 23 C43 28 39 38 28 40 C17 42 11 33 14 22 C17 11 28 7 38 11 C48 15 52 27 48 37 C44 47 31 52 21 48"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CrayonZigzag({ color }: { color: string }) {
  return (
    <svg width="88" height="44" viewBox="0 0 88 44" fill="none" aria-hidden="true">
      <path
        d="M3 6 L20 38 L37 6 L54 38 L71 6 L85 28"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CrayonCircle({ color, size = 44 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      {/* Slightly open, wobbly circle */}
      <path
        d="M22 5 C33 4 41 12 40 23 C39 34 30 41 19 40 C8 39 3 30 5 19 C7 8 16 3 22 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.1"
      />
    </svg>
  );
}

function CrayonDots({ color }: { color: string }) {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="4.5" fill={color} fillOpacity="0.6" />
      <circle cx="26" cy="8"  r="3"   fill={color} fillOpacity="0.5" />
      <circle cx="42" cy="14" r="5"   fill={color} fillOpacity="0.65" />
      <circle cx="15" cy="30" r="4"   fill={color} fillOpacity="0.55" />
      <circle cx="38" cy="32" r="4.5" fill={color} fillOpacity="0.6" />
      <circle cx="24" cy="45" r="3.5" fill={color} fillOpacity="0.5" />
    </svg>
  );
}

function CrayonFlower({ color }: { color: string }) {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" aria-hidden="true">
      {/* Centre */}
      <circle cx="29" cy="29" r="7" fill={color} />
      {/* Cardinal petals */}
      <ellipse cx="29" cy="12" rx="5.5" ry="10" fill={color} fillOpacity="0.4" />
      <ellipse cx="29" cy="46" rx="5.5" ry="10" fill={color} fillOpacity="0.4" />
      <ellipse cx="12" cy="29" rx="10" ry="5.5" fill={color} fillOpacity="0.4" />
      <ellipse cx="46" cy="29" rx="10" ry="5.5" fill={color} fillOpacity="0.4" />
      {/* Diagonal petals */}
      <ellipse cx="16" cy="16" rx="5.5" ry="10" fill={color} fillOpacity="0.28" transform="rotate(-45 16 16)" />
      <ellipse cx="42" cy="16" rx="5.5" ry="10" fill={color} fillOpacity="0.28" transform="rotate(45 42 16)" />
      <ellipse cx="16" cy="42" rx="5.5" ry="10" fill={color} fillOpacity="0.28" transform="rotate(45 16 42)" />
      <ellipse cx="42" cy="42" rx="5.5" ry="10" fill={color} fillOpacity="0.28" transform="rotate(-45 42 42)" />
    </svg>
  );
}

function CrayonScribble({ color }: { color: string }) {
  return (
    <svg width="72" height="42" viewBox="0 0 72 42" fill="none" aria-hidden="true">
      <path
        d="M5 21 C10 8 18 34 26 21 C28 17 30 11 36 9 C42 7 44 15 47 21 C50 27 54 34 60 30 C64 27 67 19 70 21"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function CrayonArrow({ color }: { color: string }) {
  return (
    <svg width="64" height="40" viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path
        d="M5 20 C22 18 40 15 54 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M45 11 L57 20 L45 29"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CrayonX({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <line x1="6"  y1="6"  x2="34" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="6"  x2="6"  y2="34" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// ── Config types ─────────────────────────────────────────────────────────────

interface DoodleConfig {
  id: string;
  node: ReactNode;
  style: CSSProperties;
  animate: TargetAndTransition;
  transition: Transition;
  className?: string;
}

interface EmojiConfig {
  id: string;
  icon: string;
  style: CSSProperties;
  duration: number;
  delay: number;
  className?: string;
}

// ── Placement data ───────────────────────────────────────────────────────────

const doodles: DoodleConfig[] = [
  // ── Left side ──────────────────────────────────────────────────────────────
  {
    id: "star-tl",
    node: <CrayonStar color={SUNSHINE} size={58} />,
    style: { top: "7%", left: "3%" },
    animate: { rotate: [0, 18, -12, 15, 0], scale: [1, 1.15, 0.95, 1.1, 1] },
    transition: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
  },
  {
    id: "squiggle-lt",
    node: <CrayonSquiggle color={SKY} />,
    style: { top: "21%", left: "-2%" },
    animate: { y: [0, -10, 5, -8, 0], x: [0, 5, -2, 4, 0] },
    transition: { duration: 6.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 },
    className: "hidden md:block",
  },
  {
    id: "dots-lt",
    node: <CrayonDots color={CHERRY} />,
    style: { top: "32%", left: "1%" },
    animate: { y: [0, -9, 5, -7, 0], rotate: [0, 10, -5, 8, 0] },
    transition: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
    className: "hidden md:block",
  },
  {
    id: "spiral-ml",
    node: <CrayonSpiral color={CHERRY} />,
    style: { top: "46%", left: "1.5%" },
    animate: { rotate: [0, 360] },
    transition: { duration: 15, repeat: Infinity, repeatType: "loop", ease: "linear" },
    className: "hidden md:block",
  },
  {
    id: "zigzag-ml",
    node: <CrayonZigzag color={SKY} />,
    style: { top: "61%", left: "-3%" },
    animate: { y: [0, -8, 4, -6, 0], x: [0, 6, -3, 4, 0] },
    transition: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 },
    className: "hidden md:block",
  },
  {
    id: "scribble-bl",
    node: <CrayonScribble color={SUNSHINE} />,
    style: { bottom: "26%", left: "1.5%" },
    animate: { y: [0, -10, 5, -8, 0], rotate: [0, -6, 4, -5, 0] },
    transition: { duration: 7.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4 },
    className: "hidden md:block",
  },
  {
    id: "heart-bl",
    node: <CrayonHeart color={CHERRY} size={48} />,
    style: { bottom: "9%", left: "3%" },
    animate: { scale: [1, 1.2, 0.9, 1.15, 1], rotate: [0, -10, 8, -6, 0] },
    transition: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.8 },
  },

  // ── Right side ─────────────────────────────────────────────────────────────
  {
    id: "heart-tr",
    node: <CrayonHeart color={CHERRY} size={56} />,
    style: { top: "5%", right: "4%" },
    animate: { scale: [1, 1.2, 0.9, 1.15, 1], rotate: [0, 10, -8, 6, 0] },
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 },
  },
  {
    id: "dots-tr",
    node: <CrayonDots color={SUNSHINE} />,
    style: { top: "20%", right: "1.5%" },
    animate: { y: [0, -12, 6, -9, 0], rotate: [0, 12, -6, 9, 0] },
    transition: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 },
    className: "hidden md:block",
  },
  {
    id: "x-rt",
    node: <CrayonX color={CHERRY} />,
    style: { top: "33%", right: "2%" },
    animate: { rotate: [0, 25, -15, 20, 0], scale: [1, 1.1, 0.9, 1.05, 1] },
    transition: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.9 },
    className: "hidden md:block",
  },
  {
    id: "flower-mr",
    node: <CrayonFlower color={SUNSHINE} />,
    style: { top: "45%", right: "1.5%" },
    animate: { rotate: [0, 20, -15, 12, 0], scale: [1, 1.1, 0.95, 1.08, 1] },
    transition: { duration: 9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 },
    className: "hidden md:block",
  },
  {
    id: "circle-mr",
    node: <CrayonCircle color={SKY} size={52} />,
    style: { top: "61%", right: "1%" },
    animate: { scale: [1, 1.15, 0.9, 1.1, 1], y: [0, -10, 5, -7, 0] },
    transition: { duration: 6.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2 },
    className: "hidden md:block",
  },
  {
    id: "arrow-br",
    node: <CrayonArrow color={SUNSHINE} />,
    style: { bottom: "26%", right: "1.5%" },
    animate: { x: [0, 8, -4, 6, 0], y: [0, -5, 3, -4, 0] },
    transition: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.7 },
    className: "hidden md:block",
  },
  {
    id: "star-br",
    node: <CrayonStar color={SKY} size={48} />,
    style: { bottom: "8%", right: "4%" },
    animate: { rotate: [0, -18, 14, -10, 0], scale: [1, 1.1, 0.95, 1.08, 1] },
    transition: { duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2.2 },
  },
];

const emojis: EmojiConfig[] = [
  { id: "crayon",   icon: "🖍️", style: { top: "12%",    left: "11%" },  duration: 5,   delay: 0 },
  { id: "palette",  icon: "🎨", style: { top: "37%",    left: "7%"  },  duration: 7.5, delay: 1.2, className: "hidden md:block" },
  { id: "pencil",   icon: "✏️", style: { top: "68%",    left: "8%"  },  duration: 6,   delay: 0.6, className: "hidden md:block" },
  { id: "star",     icon: "⭐", style: { top: "9%",     right: "13%"},  duration: 4.5, delay: 0.3 },
  { id: "sparkle",  icon: "✨", style: { top: "53%",    right: "8%" },  duration: 6.5, delay: 1.8, className: "hidden md:block" },
  { id: "rainbow",  icon: "🌈", style: { bottom: "14%", right: "11%"},  duration: 8,   delay: 0.9 },
  { id: "game",     icon: "🎮", style: { bottom: "10%", left: "12%" },  duration: 7,   delay: 2.1, className: "hidden md:block" },
  { id: "japan",    icon: "🗾", style: { top: "28%",    right: "7%" },  duration: 5.5, delay: 1.4, className: "hidden lg:block" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function BackgroundDoodles() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* SVG doodles */}
      {doodles.map((d) => (
        <motion.div
          key={d.id}
          className={`absolute opacity-75 ${d.className ?? ""}`}
          style={d.style}
          animate={d.animate}
          transition={d.transition}
        >
          {d.node}
        </motion.div>
      ))}

      {/* Floating emojis */}
      {emojis.map((e) => (
        <motion.div
          key={e.id}
          className={`absolute text-3xl select-none opacity-70 ${e.className ?? ""}`}
          style={e.style}
          animate={{ y: [0, -14, 7, -10, 0], rotate: [0, 10, -5, 8, 0] }}
          transition={{
            duration: e.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: e.delay,
          }}
        >
          {e.icon}
        </motion.div>
      ))}
    </div>
  );
}
