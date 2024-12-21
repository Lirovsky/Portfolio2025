import PropTypes from "prop-types";

import { Modal } from "flowbite-react";
import { useState } from "react";
import { customTheme } from "../../customTheme";

export default function Cards({
  bg,
  title,
  description,
  url,
  technical,
  icon,
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex h-full flex-col rounded-3xl">
      <div
        className={`${bg} bg-start flex h-full items-end justify-center bg-cover bg-no-repeat md:bg-center`}
      >
        <button
          onClick={() => setOpenModal(true)}
          className="mb-14 rounded-full border-2 bg-orange-500 px-3 pb-1 pt-2 font-bebas text-lg text-white transition-all hover:bg-orange-400 md:px-5 md:pb-2 md:pt-3 md:text-2xl dark:bg-cyan-500 dark:hover:bg-cyan-400"
        >
          SAIBA MAIS
        </button>
      </div>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        theme={customTheme}
        className="z-10 mx-1 mt-24 rounded-3xl transition-all md:mt-0"
      >
        <Modal.Header className="text-gray-200">
          <p className="flex items-center gap-4">
            {title} {icon}
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm leading-normal text-gray-200 sm:text-base dark:text-gray-400">
              {description}
            </p>
            <p className="text-sm leading-normal text-gray-200 sm:text-base dark:text-gray-400">
              {technical}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a
            href={url}
            target="_blank"
            className="hover: rounded-lg bg-green-500 px-4 pb-1 pt-2 font-bebas text-xl text-white transition hover:bg-green-400"
          >
            Ver site
          </a>
          <button
            onClick={() => setOpenModal(false)}
            className="hover: rounded-lg border-2 bg-transparent px-4 pb-1 pt-2 font-bebas text-xl text-white transition hover:bg-red-600"
          >
            Voltar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Cards.propTypes = {
  bg: PropTypes.string,
  description: PropTypes.string,
  technical: PropTypes.string,
  customTheme: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.element,
  url: PropTypes.string,
};
