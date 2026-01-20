import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 200);
    ctx.stroke();
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1200}
        height={800}
    className="bg-gray-800 rounded-lg border border-gray-700"
      />
    </div>
  );
};

export default Canvas;