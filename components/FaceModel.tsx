export default function FaceModel() {
  return (
    <div
      className="
        absolute
        right-0
        top-0
        w-[50%]
        h-screen
        flex
        items-center
        justify-center
        z-10
      "
    >
      <img
        src="/cyber-face.png"
        alt="Cyber Face"
        className="
          w-[700px]
          object-contain
          opacity-90
          mix-blend-screen
          drop-shadow-[0_0_80px_rgba(127,90,240,0.7)]
          contrast-125
        "
      />
    </div>
  );
}