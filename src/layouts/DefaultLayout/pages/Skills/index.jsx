import { FaMugHot } from "react-icons/fa";
import { ProgressBars } from "./components/ProgressBars";

export default function Skills() {
  return (
    <div className="flex min-h-screen items-center justify-center text-gray-200 dark:text-cyan-400">
      <div className="mb-10 mt-28 flex w-11/12 flex-col justify-center rounded-banner bg-black/40 p-14 text-3xl shadow-orange dark:bg-black/80 dark:shadow-cyan lg:p-20">
        <div className="flex justify-center">
          <h2 className="flex items-baseline py-8 font-bebas text-4xl font-bold tracking-widest md:py-0 md:pb-8 md:text-5xl">
            <FaMugHot className="me-5 text-orange-500 dark:text-purple-700" />
            HABILIDADES
            <FaMugHot className="ms-5 text-orange-500 dark:text-purple-700" />
          </h2>
        </div>
        <ProgressBars />
      </div>
    </div>
  );
}
