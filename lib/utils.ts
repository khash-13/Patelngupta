import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Framer Motion utilise
export const fadeInOut = (
  direction: "left" | "right" | "up" | "down" | "",
  type: string,
  delay: number,
  duration: number
) => {
  let hiddenX = 0;
  let hiddenY = 0;

  switch (direction) {
    case "left":
      hiddenX = 100;
      break;
    case "right":
      hiddenX = -100;
      break;
    case "up":
      hiddenY = 100;
      break;
    case "down":
      hiddenY = -100;
      break;
  }

  return {
    hidden: {
      x: hiddenX,
      y: hiddenY,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
    exit: {
      x: hiddenX,
      y: hiddenY,
      opacity: 0,
      transition: {
        type,
        duration,
        ease: "easeIn",
      },
    },
  };
};

export const zoom = (
  direction: "in" | "out",
  delay: number,
  duration: number
) => {
  const scaleStart = direction === "in" ? 0 : 1;
  const scaleEnd = direction === "in" ? 1 : 0.8;

  return {
    hidden: {
      scale: scaleStart,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
    exit: {
      scale: scaleEnd,
      opacity: 0,
      transition: {
        type: "tween",
        duration,
        ease: "easeIn",
      },
    },
  };
};
