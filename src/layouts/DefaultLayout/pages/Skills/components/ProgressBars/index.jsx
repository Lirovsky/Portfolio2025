import { Flowbite } from "flowbite-react";
import { customTheme } from "./customTheme";
import Bar from "./components";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiCypress } from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaSass,
  FaCss3,
  FaHtml5,
  FaFigma,
} from "react-icons/fa";

export function ProgressBars() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="gap-x-10 text-xl md:flex">
        <div className="w-full">
          <Bar
            title="HTML"
            icon={<FaHtml5 />}
            progress={90}
            color="orange"
            text="text-orange-300 dark:text-orange-500"
          />
          <Bar
            title="CSS"
            icon={<FaCss3 />}
            progress={90}
            color="blue"
            text="text-blue-500 dark:text-blue-700"
          />
          <Bar
            title="Java Script"
            icon={<FaJs />}
            progress={70}
            color="yellow"
            text="text-yellow-200 dark:text-yellow-300"
          />
          <Bar
            title="Bootstrap"
            icon={<FaBootstrap />}
            progress={90}
            color="purple"
            text="text-purple-400 dark:text-purple-500"
          />
          <Bar
            title="Sass"
            icon={<FaSass />}
            progress={90}
            color="red"
            text="text-red-400 dark:text-red-500"
          />
        </div>
        <div className="w-full">
          <Bar
            title="React"
            icon={<FaReact />}
            progress={80}
            color="cyan"
            text="text-cyan-300 dark:text-cyan-400"
          />
          <Bar
            title="Tailwind"
            icon={<RiTailwindCssFill />}
            progress={90}
            color="cyan2"
            text="text-cyan-400 dark:text-cyan-600"
          />
          <Bar
            title="Cypress"
            icon={<SiCypress />}
            progress={50}
            color="green"
            text="text-green-500 dark:text-green-500"
          />
          <Bar
            title="Figma"
            icon={<FaFigma />}
            progress={70}
            color="lime"
            text="text-lime-400 dark:text-lime-500"
          />
        </div>
      </div>
    </Flowbite>
  );
}
