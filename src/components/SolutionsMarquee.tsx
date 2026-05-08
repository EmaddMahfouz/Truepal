import { motion } from "motion/react";

const solutions = [
  "Swimming Pools",
  "Fountains & Water Features",
  "Lagoons",
  "Heating Solutions",
  "Wellness & Jacuzzis",
];

export function SolutionsMarquee() {
  return (
    <div className="bg-truepal-blue py-4 overflow-hidden relative border-b-4 border-truepal-green">
      <div className="flex gap-8 whitespace-nowrap px-4">
        <motion.div
          animate={{ x: [0, -1035] }} // Approximated width to loop
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-16 items-center"
        >
          {[...solutions, ...solutions, ...solutions].map((solution, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-white font-bold md:text-xl tracking-wider uppercase">
                {solution}
              </span>
              <div className="w-2 h-2 rounded-full bg-truepal-green" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
