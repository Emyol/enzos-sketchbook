"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import type { Variants } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const sketches = [
  { src: "/sketches/spiderman.jpg",        alt: "A pencil sketch of Spider-Man swinging through the city" },
  { src: "/sketches/bonnie.jpg",           alt: "A crayon drawing of Bonnie the bear" },
  { src: "/sketches/DogDay.jpg",           alt: "A drawing of Dog Day character" },
  { src: "/sketches/Experiment 1006.jpg",  alt: "A crayon drawing inspired by Experiment 1006" },
  { src: "/sketches/human.jpg",            alt: "A pencil sketch of a human figure" },
  { src: "/sketches/153dfdc5-b1d2-4584-94e1-d25e25d08810.jpg", alt: "A drawing of a smiling Roblox character with a yellow hat on a red and white striped background" },
  { src: "/sketches/3700ff66-d21c-44cb-ba71-42bb99e39db4.jpg", alt: "A close-up drawing of a Roblox character face with a stern expression on a yellow striped background" },
  { src: "/sketches/3cf5c834-983d-41ff-966e-07864907de27.jpg", alt: "A pencil sketch of a large multi-eyed monster creature armed with weapons and claws" },
  { src: "/sketches/635c8f48-d058-4823-bad6-28a82546cf95.jpg", alt: "A pencil sketch of a winged stuffed-toy monster with button eyes and sharp claws" },
  { src: "/sketches/71698283-453b-4c14-af83-81fbec6721f4.jpg", alt: "A pencil sketch of a giant boss creature built from many smaller monsters with eyes and mouths" },
  { src: "/sketches/9382807b-4cde-4b03-844f-3dcb19baac4f.jpg", alt: "A pencil sketch of a round blob monster with cat-like eyes, horns, and claws" },
  { src: "/sketches/9cb1b33a-4fcd-4ec2-81ba-5e14c7d10d5c.jpg", alt: "A sketchbook page labeled Enzo's Sketchbook filled with face doodles and character sketches" },
  { src: "/sketches/b70fa221-7a0b-46d8-9a8f-03502f997798.jpg", alt: "A colorful drawing of a Roblox character named Shimmy yg standing on a green hill under a blue sky" },
];

// ── Scroll progress bar ───────────────────────────────────────────────────────

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1.5 bg-accent-cherry origin-left z-50"
    />
  );
}

// ── Animated button ───────────────────────────────────────────────────────────
// Wrapper bobs continuously; button itself handles gestures with a fast transition.

function WiggleButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.07, rotate: [0, -2, 2, 0] }}
        whileTap={{ scale: 0.93 }}
        transition={{ duration: 0.25 }}
        className={`font-heading rounded-xl border-2 border-graphite px-6 py-3 shadow-[4px_4px_0px_#333333] cursor-pointer select-none ${className}`}
      >
        {children}
      </motion.button>
    </motion.div>
  );
}

// ── Crayon divider ────────────────────────────────────────────────────────────

function CrayonDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="h-1 w-16 sm:w-24 rounded-full bg-accent-cherry origin-right"
      />
      <motion.span
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.15 }}
        className="text-xl sm:text-2xl select-none"
      >
        🖍️
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="h-1 w-16 sm:w-24 rounded-full bg-accent-sunshine origin-left"
      />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroSection({ onCTA }: { onCTA: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-5 py-16 sm:py-24 md:py-32 text-center min-h-[88svh] md:min-h-0">

      {/* Expanding accent underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-1 w-20 sm:w-24 rounded-full bg-accent-sunshine origin-left"
      />

      {/* Outer wrapper floats the heading after the entrance settles */}
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-heading -rotate-1 text-4xl sm:text-5xl md:text-7xl leading-tight text-graphite"
        >
          Welcome to<br />
          <span className="text-accent-cherry">Enzo&apos;s</span> Art Studio!
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="max-w-xs sm:max-w-md font-body font-medium leading-relaxed text-graphite text-base sm:text-lg"
      >
        A digital sketchbook packed with masterpieces, imagination, and a whole lot of crayon.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.45, type: "spring", bounce: 0.45 }}
      >
        <WiggleButton onClick={onCTA} className="bg-accent-sunshine text-graphite text-base sm:text-lg">
          See My Drawings
        </WiggleButton>
      </motion.div>

      {/* Scroll hint arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5"
      >
        <motion.span
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-graphite/35 text-lg sm:text-xl select-none"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}

// ── Interview card variants (staggered children) ───────────────────────────────

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" as const } },
};

// ── Meet the Artist ───────────────────────────────────────────────────────────

const interviewItems = [
  { emoji: "🎨", q: "What do I do?",          a: "I love to draw and create new things. This website is where I keep all my favorite masterpieces." },
  { emoji: "🎮", q: "Hobbies besides art?",   a: "When I don't have a pencil in my hand, I am definitely playing Roblox." },
  { emoji: "✈️", q: "Ultimate travel spot?",  a: "Japan! It is my absolute favorite country to visit." },
];

function MeetTheArtist() {
  return (
    <section className="mx-auto max-w-2xl px-5 sm:px-6 py-12 md:py-16">

      <motion.h2
        initial={{ opacity: 0, x: -22 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-heading rotate-2 mb-5 text-3xl sm:text-4xl text-graphite"
      >
        Meet the Artist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-body font-medium leading-relaxed text-graphite mb-7 text-base sm:text-lg"
      >
        <span className="font-heading text-xl sm:text-2xl text-accent-cherry">
          Hello! I&apos;m Enzo.
        </span>{" "}
        Welcome to my digital sketchbook!
      </motion.p>

      {/* Staggered card list — re-animates every time it enters the viewport */}
      <motion.div
        className="flex flex-col gap-4"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {interviewItems.map((item) => (
          <motion.div
            key={item.q}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.97, y: -2, transition: { duration: 0.12 } }}
            className="flex gap-3 sm:gap-4 rounded-2xl border-2 border-graphite bg-white p-4 sm:p-5 shadow-[4px_4px_0px_#333333]"
          >
            <span className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5">{item.emoji}</span>
            <div>
              <p className="font-heading text-base sm:text-lg text-accent-sky">{item.q}</p>
              <p className="font-body font-medium leading-relaxed text-graphite mt-1 text-sm sm:text-base">
                {item.a}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────────

interface LightboxProps {
  sketch: { src: string; alt: string } | null;
  onClose: () => void;
}

function Lightbox({ sketch, onClose }: LightboxProps) {
  // Close on Escape (keyboard + tablet keyboard covers)
  useEffect(() => {
    if (!sketch) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [sketch, onClose]);

  return (
    <AnimatePresence>
      {sketch && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            layoutId={sketch.src}
            className="relative max-h-[90svh] max-w-[94vw] sm:max-w-[85vw] md:max-w-[78vw] overflow-hidden rounded-2xl border-4 border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={sketch.src}
              alt={sketch.alt}
              className="block max-h-[86svh] w-auto h-auto object-contain"
              style={{ maxWidth: "90vw" }}
            />
            <motion.button
              aria-label="Close sketchbook"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.88 }}
              transition={{ duration: 0.18 }}
              className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/90 p-2.5 shadow-md"
            >
              <X size={18} strokeWidth={2.5} className="text-graphite" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────

function Gallery() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="px-4 sm:px-6 py-12 md:py-16">

      <motion.h2
        initial={{ opacity: 0, x: -22 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-heading -rotate-1 mb-8 text-center text-3xl sm:text-4xl text-graphite"
      >
        My Masterpieces
      </motion.h2>

      {/* CSS columns masonry — 2 cols on mobile, more as screen grows */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
        {sketches.map((sketch, i) => (
          <motion.div
            key={sketch.src}
            layoutId={sketch.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.42, delay: i * 0.07 }}
            whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 2 : -2, y: -6, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.12 } }}
            onClick={() => setSelected(sketch)}
            className="mb-3 sm:mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border-2 border-graphite shadow-[4px_4px_0px_#333333] active:shadow-[2px_2px_0px_#333333]"
          >
            <Image
              src={sketch.src}
              alt={sketch.alt}
              width={600}
              height={800}
              priority={i < 2}
              className="block w-full h-auto object-contain"
              style={{ display: "block" }}
            />
          </motion.div>
        ))}
      </div>

      <Lightbox sketch={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="py-10 text-center font-body font-medium text-graphite/60 text-sm"
    >
      Made with 🖍️ and imagination. © 2026 Enzo.
    </motion.footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <ScrollProgressBar />
      <HeroSection onCTA={scrollToGallery} />
      <CrayonDivider />
      <MeetTheArtist />
      <CrayonDivider />
      <Gallery />
      <Footer />
    </main>
  );
}
