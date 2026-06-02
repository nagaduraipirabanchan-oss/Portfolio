"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function NetworkBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Attach THREE globally
    (window as any).THREE = THREE;

    // Prevent multiple initialization
    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,
        THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        scale: 1.0,
        scaleMobile: 1.0,

        // 🔥 Premium Colors
        color: 0x8b5cf6,
        backgroundColor: 0x050816,

        // ✨ Better Settings
        points: 10,
        maxDistance: 18,
        spacing: 20,

        // 🌫 Smooth look
        showDots: true,

        // ⚡ Performance
        speed: 1.2,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Vanta Background */}
      <div
        ref={vantaRef}
        className="fixed inset-0 w-full h-full -z-30"
      />

      {/* Dark Overlay */}
      <div
        className="
          fixed
          inset-0
          bg-black/40
          backdrop-blur-[1px]
          -z-20
        "
      />

      {/* Purple Glow */}
      <div
        className="
          fixed
          top-[-120px]
          left-[-120px]
          w-[350px]
          h-[350px]
          bg-purple-600/30
          blur-3xl
          rounded-full
          -z-10
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          fixed
          bottom-[-120px]
          right-[-120px]
          w-[350px]
          h-[350px]
          bg-fuchsia-500/20
          blur-3xl
          rounded-full
          -z-10
        "
      />
    </>
  );
}