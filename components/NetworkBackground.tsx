"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function NetworkBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // ⚡ Fix: attach THREE globally (Vanta requirement)
    (window as any).THREE = THREE;

    // ⚡ Prevent multiple initialization
    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,

        THREE: THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        scale: 1.0,
        scaleMobile: 1.0,

        // 🎨 Cyber theme colors
        color: 0x7f5af0,          // purple neon lines
        backgroundColor: 0x050816, // dark navy background

        points: 12,
        maxDistance: 20,
        spacing: 18,
      });
    }

    // 🧹 cleanup on unmount
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="
        fixed
        inset-0
        w-full
        h-full
        -z-20
      "
    />
  );
}