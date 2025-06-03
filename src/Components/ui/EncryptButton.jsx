import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*():{};|,.<>/?";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const EncryptButton = ({ buttonText = "Encrypt data" }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(buttonText);

  const scramble = () => {
    let pos = 0;

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const scrambled = buttonText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= buttonText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(buttonText);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border border-neutral-500 bg-neutral-700 px-3 py-1.5 font-mono font-medium uppercase text-xs text-neutral-300 transition-colors hover:text-indigo-300 inline-flex items-center gap-1 align-middle"
      style={{ verticalAlign: "middle" }}
      type="button"
    >
      <div className="relative z-10 flex items-center gap-1">
        <FiLock size={14} />
        <span>{text}</span>
      </div>

      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100 rounded-lg"
      />
    </motion.button>
  );
};

export default EncryptButton;
