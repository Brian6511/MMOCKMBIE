import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
  overlay?: string;
  className?: string;
  speed?: number;
  backgroundPosition?: string;
}

const ParallaxSection = ({
  children,
  backgroundImage,
  overlay = "bg-primary/80",
  className = "",
  speed = 0.3,
  backgroundPosition = "center",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      setOffset(scrolled * speed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition,
          transform: `translateY(${offset}px) scale(1.1)`,
          willChange: "transform",
        }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
