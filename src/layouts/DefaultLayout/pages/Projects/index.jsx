import { FaCode } from "react-icons/fa";
import ProjectCarousel from "./components/Carousel";

export default function Projetos() {
  return (
    <div className="flex min-h-screen items-center justify-center text-gray-200 dark:text-cyan-400">
      <div className="mb-10 mt-28 flex w-11/12 flex-col items-center justify-center rounded-banner bg-black/40 p-14 text-3xl shadow-orange dark:bg-black/70 dark:shadow-cyan lg:p-20">
        <h2 className="flex pb-8 font-bebas text-4xl font-bold tracking-wider sm:text-5xl">
          <FaCode className="me-5 text-orange-500 dark:text-purple-700" />
          PROJETOS
          <FaCode className="ms-5 text-orange-500 dark:text-purple-700" />
        </h2>
        <ProjectCarousel />
      </div>
    </div>
  );
}
