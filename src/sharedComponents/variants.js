export const variants = {
  show: {
    x: 0,
    opacity: [0, 0.3, 1],
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  initial: {
    x: "-100%",
    opacity: 0,
  },
  exit: {
    x: "100%",
    opacity: 0,
  },
};
