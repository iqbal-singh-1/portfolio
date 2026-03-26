import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
};

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStar(
      x: number,
      y: number,
      size: number = Math.random() * 1.4 + 0.4
    ): Star {
      return {
        x,
        y,
        size,
        alpha: Math.random() * 0.8 + 0.2,
        speed: (Math.random() * 0.018 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      };
    }

    function generateStars(count: number = 110) {
      starsRef.current = [];
      for (let i = 0; i < count; i++) {
        starsRef.current.push(
          createStar(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }
    }

    function drawStars() {
      for (const star of starsRef.current) {
        star.alpha += star.speed;

        if (star.alpha >= 1) {
          star.alpha = 1;
          star.speed *= -1;
        } else if (star.alpha <= 0.2) {
          star.alpha = 0.2;
          star.speed *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "white";
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    }

    function drawLines() {
      const maxDist = 95;
      const stars = starsRef.current;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLines();
      drawStars();
      animationRef.current = requestAnimationFrame(animate);
    }

    function handleClick(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      starsRef.current.push(createStar(x, y, 1.6));
    }

    function handleResize() {
      resizeCanvas();
      generateStars(120);
    }

    resizeCanvas();
    generateStars(110);
    animate();

    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" />;
}