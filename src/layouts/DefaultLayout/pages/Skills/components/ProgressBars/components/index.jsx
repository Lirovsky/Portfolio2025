import { PropTypes } from "prop-types";
import { Progress } from "flowbite-react";
import { customTheme } from "../customTheme";

export default function Bar({ title, icon, progress, color, text }) {
  return (
    <div className="mb-5">
      <div
        className={`${text} mb-1 flex items-center text-base font-bold md:text-xl`}
      >
        <div className="me-2 text-2xl">{icon}</div>
        {title}
      </div>
      <Progress
        theme={customTheme}
        progress={progress}
        size="md"
        color={color}
      />
    </div>
  );
}

Bar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  progress: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
