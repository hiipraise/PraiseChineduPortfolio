import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Counter = ({ to, duration = 1, suffix = "", start = false }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    let startCount = 0;
    const end = parseInt(to);
    const totalSteps = 30;
    const increment = Math.ceil(end / totalSteps);
    const stepTime = (duration * 1000) / totalSteps;

    let current = startCount;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, stepTime);

    return () => clearInterval(timer);
  }, [to, duration, start]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const CountAnime = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const items = [
    { to: 12, suffix: "+", label: "Projects Completed" },
    { to: 3, suffix: "+", label: "Successful Years" },
    { to: 95, suffix: "%", label: "Client Retention" },
    { to: 18, suffix: "+", label: "Skilled-In" },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 w-full max-w-6xl mx-auto px-4"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`text-center px-2 md:border-l md:border-[#eeeeff] ${
            idx === 0 ? "md:border-none" : ""
          }`}
        >
          <p className="text-[#eeeeff] text-3xl md:text-4xl font-semibold font-orbitron">
            <Counter
              to={item.to}
              suffix={item.suffix}
              duration={1}
              start={inView}
            />
          </p>
          <p className="text-[#9C9C9C] text-sm md:text-base mt-2">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default CountAnime;
