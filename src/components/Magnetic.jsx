import { useRef } from "react";

export default function Magnetic({ as = "button", className = "", style = {}, children, ...props }) {
  const ref = useRef(null);
  const Tag = as;

  const onMove = (event) => {
    const el = ref.current;
    if (!el) return;

    const bounds = el.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Tag
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transition: "transform 0.15s ease", willChange: "transform", ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
