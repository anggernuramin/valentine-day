"use client";

import { useState } from "react";
import Surprise from "@/util/Confetti";
import Image from "next/image";
import { motion } from "framer-motion";
import "./style.css";

// Daftar gambar untuk efek berhamburan
const flyingImages = [
  "/celebration-photos/celebration1.jpg",
  "/celebration-photos/celebration2.jpg",
  "/celebration-photos/celebration3.jpg",
  "/celebration-photos/celebration4.jpg",
  "/celebration-photos/celebration5.jpg",
  "/celebration-photos/celebration6.jpg",
  "/celebration-photos/celebration7.jpg",
  "/celebration-photos/celebration8.jpg",
  "/celebration-photos/celebration9.jpg",
  "/celebration-photos/celebration10.jpg",
];

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startCelebration = () => {
    if (!isPlaying) {
      const music = new Audio("/audio/videoplayback.mp3");
      music.loop = true;
      music.volume = 0.9;
      music.play().catch((error) => console.log("Autoplay blocked:", error));
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`h-full w-full overflow-hidden relative transition-all  flex flex-col items-center justify-center `}
    >
      <div
        className={` w-full h-full transition-all ${
          isPlaying === false ? "bg-celebration" : "bg-party"
        }`}
      >
        <div className="w-full h-full relative z-50 flex justify-center items-center">
          {!isPlaying && (
            <div className="grid grid-cols-1 gap-5">
              <div className="flex relative justify-center items-center gap-2">
                {/* foto utama */}

                <Image
                  src="/give1.jpg"
                  alt="two animals holding hearts and smiling gif"
                  width={320}
                  height={300}
                  // className="yay-img "
                  priority
                />
                <Image
                  src="/give2.jpg"
                  alt="two animals holding hearts and smiling gif"
                  width={320}
                  height={300}
                  // className="yay-img "
                  priority
                />

                {/* motif */}
                <Image
                  src="/celebrate.gif"
                  alt="two animals holding hearts and smiling gif"
                  width={120}
                  height={300}
                  className="absolute -top-20 rotate-12"
                  priority
                />
                <Image
                  src="/celebrate.gif"
                  alt="two animals holding hearts and smiling gif"
                  width={120}
                  height={300}
                  className="absolute -left-20 rotate-12"
                  priority
                />

                <Image
                  src="/celebrate.gif"
                  alt="two animals holding hearts and smiling gif"
                  width={120}
                  height={300}
                  className="absolute -bottom-0 -rotate-12"
                  priority
                />
                <Image
                  src="/celebrate.gif"
                  alt="two animals holding hearts and smiling gif"
                  width={120}
                  height={300}
                  className="absolute -right-20 -rotate-12"
                  priority
                />
                <Image
                  src="/celebrate.gif"
                  alt="two animals holding hearts and smiling gif"
                  width={50}
                  height={300}
                  className="absolute "
                  priority
                />
              </div>
              <div className="w-full ">
                <p
                  // id="yay"
                  className="text-white text-4xl font-bold text-center"
                >
                  💖 MUNIK! 💖
                </p>
                <button
                  onClick={startCelebration}
                  className="px-6 w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg hover:scale-105 transition-transform"
                >
                  Time to Party 🎶🎉
                </button>
              </div>
            </div>
          )}
          <Surprise />

          {/* Efek Gambar Berterbangan */}
          {isPlaying &&
            flyingImages.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="Flying Image"
                className="absolute w-48 h-48 object-cover object-center"
                initial={{
                  opacity: 0,
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 400 - 200,
                  rotate: Math.random() * 360,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.random() * 800 - 400,
                  y: Math.random() * 800 - 400,
                  rotate: Math.random() * 720 - 360,
                  scale: [1, 1.2, 1], // Gerakan lebih halus tanpa perubahan skala drastis
                }}
                transition={{
                  duration: Math.random() * 3 + 3, // Durasi 3 - 6 detik
                  repeat: Infinity,
                  repeatType: "mirror", // Gerakan bolak-balik smooth
                  ease: "easeInOut",
                  delay: Math.random() * 5, // Delay max 5 detik supaya lebih natural
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
