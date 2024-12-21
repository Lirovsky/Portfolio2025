import { PropTypes } from "prop-types";

export default function Link({ icon, url, title }) {
  return (
    <li className="flex items-center gap-2">
      <div className="text-orange-500 dark:text-purple-700">{icon}</div>

      <a
        className="hover:text-orange-500 dark:hover:text-purple-700"
        href={url}
        target="_blank"
      >
        {title}
      </a>
    </li>
  );
}
Link.propTypes = {
  icon: PropTypes.element,
  url: PropTypes.string,
  title: PropTypes.string,
};
