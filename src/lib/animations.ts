import type { Transition } from "motion/react"

// 快速 spring 动画预设
export const springAnimations = {
  // 快速弹性动画 - 用于按钮、卡片等交互元素
  fast: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } as Transition,

  // 中等速度弹性动画 - 用于页面进入、模态框等
  medium: {
    type: "spring",
    stiffness: 300,
    damping: 25,
  } as Transition,

  // 慢速弹性动画 - 用于大型元素移动
  slow: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  } as Transition,

  // 超快速弹性动画 - 用于 hover 效果
  ultraFast: {
    type: "spring",
    stiffness: 500,
    damping: 35,
  } as Transition,

  // 带延迟的动画
  withDelay: (delay: number, speed: "fast" | "medium" | "slow" = "medium") =>
    ({
      ...springAnimations[speed],
      delay,
    }) as Transition,
}

// 浮动动画预设 - 使用更快的循环
export const floatingAnimations = {
  gentle: {
    y: [0, -10, 0],
    rotate: [0, 2, 0],
  },
  medium: {
    y: [0, -15, 0],
    rotate: [0, 3, 0],
  },
  strong: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
  },
}

// 浮动动画的 transition 配置 - 更快的循环
export const floatingTransitions = {
  gentle: {
    duration: 3, // 从 6s 减少到 3s
    repeat: Infinity,
    ease: "easeInOut",
  } as Transition,
  medium: {
    duration: 2.5, // 从 5s 减少到 2.5s
    repeat: Infinity,
    ease: "easeInOut",
  } as Transition,
  strong: {
    duration: 2, // 从 4s 减少到 2s
    repeat: Infinity,
    ease: "easeInOut",
  } as Transition,
}

// 滚动动画预设
export const scrollAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: springAnimations.medium,
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: springAnimations.medium,
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: springAnimations.medium,
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: springAnimations.medium,
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: springAnimations.fast,
  },
}

// 交互动画预设
export const interactionAnimations = {
  hover: {
    scale: 1.05,
    transition: springAnimations.ultraFast,
  },
  tap: {
    scale: 0.95,
    transition: springAnimations.ultraFast,
  },
  focus: {
    scale: 1.02,
    transition: springAnimations.fast,
  },
}
