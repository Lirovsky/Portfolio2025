export const customTheme = {
  root: {
    leftControl:
      "absolute left-0 top-0 flex h-full items-center justify-center px-8 focus:outline-none invisible sm:visible",
    rightControl:
      "absolute right-0 top-0 flex h-full items-center justify-center px-8 focus:outline-none invisible sm:visible",
    show: {
      on: "flex bg-black/50",
      off: "hidden",
    },
  },
  indicators: {
    active: {
      off: "bg-orange-500 dark:bg-cyan-800 dark:hover:bg-black/30",
      on: "bg-orange-300 dark:bg-cyan-500",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full text-cyan-400 border-2 border-orange-400 dark:border-cyan-400  bg-black/40 sm:border-3 group-hover:bg-black/70 group-focus:outline-none sm:h-14 sm:w-14",

    icon: "h-5 w-5 text-orange-400 dark:text-cyan-400 rounded-full p-2 sm:h-14 sm:w-16",
  },
  content: {
    inner: "rounded-banner bg-black/70 shadow-orange dark:shadow-cyan",
  },
  header: {
    base: "flex items-center justify-center border-b border-orange-500 dark:border-cyan-500 p-5",
    title: "text-2xl font-medium text-orange-500 dark:text-cyan-500",
    close: {
      base: "ml-auto inline-flex items-center rounded-full p-2 text-sm text-gray-400 hover:text-orange-500 dark:hover:text-cyan-500 hover:border-orange-500 dark:hover:border-cyan-500",
      icon: "h-7 w-7",
    },
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-orange-500 dark:border-cyan-500  p-6 ",
    popup: "border-t",
  },
};
