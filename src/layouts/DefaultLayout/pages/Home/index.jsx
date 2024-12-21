import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

export default function Home() {
  const links = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/pablo-langer-6300802a1/",
      target: "_blank",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/Lirovsky",
      target: "_blank",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://drive.google.com/file/d/1uSXXZZztXQPnaXlCoSZh2mBNdse4FtJP/view?usp=drive_link",
      target: "_blank",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center text-gray-300 dark:text-cyan-400">
      <div className="mb-10 mt-28 flex w-11/12 flex-col items-center justify-center rounded-banner bg-black/40 p-14 text-3xl shadow-orange dark:bg-black/70 dark:shadow-cyan sm:items-start lg:p-24">
        <h1 className="bg-gradient-to-r from-red-500 from-10% via-orange-400 via-30% to-yellow-200 to-90% bg-clip-text font-bebas text-6xl font-bold leading-11 text-transparent dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500 md:text-8xl md:leading-12 lg:text-12xl lg:leading-13">
          Desenvolvedor
        </h1>
        <div className="flex flex-col items-center sm:flex-row">
          <h1 className="bg-gradient-to-r from-red-500 from-10% via-orange-400 via-30% to-yellow-200 to-90% bg-clip-text font-bebas text-6xl font-bold leading-11 text-transparent dark:from-indigo-500 dark:via-sky-500 dark:to-emerald-500 md:text-8xl md:leading-12 lg:text-12xl lg:leading-13">
            Frontend
          </h1>
          <div className="mt-5 flex sm:mt-0">
            {links.map((item) => (
              <a
                href={item.link}
                key={item.id}
                target={item.target}
                className="mx-4 text-4xl text-yellow-200 transition-all duration-500 hover:-translate-y-4 dark:text-emerald-500 sm:mx-0 sm:ms-7 md:ms-9 md:text-5xl lg:ms-12 lg:text-7xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 hidden w-9/12 text-xl sm:block lg:w-8/12 lg:text-2xl">
          Olá!! Eu sou o Pablo. Tenho 26 anos e sou um desenvolvedor frontend
          com 1 ano de experiência trabalhando como freelancer na área.
        </p>
      </div>
    </div>
  );
}
