import { FaPeopleGroup } from "react-icons/fa6";
import {
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaPhoneAlt,
  FaGithub,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "./components/Link";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center text-gray-200 dark:text-cyan-400">
      <div className="mb-10 mt-28 flex w-11/12 flex-col items-center justify-evenly rounded-banner bg-black/40 py-14 text-3xl shadow-orange sm:flex-row lg:py-24 dark:bg-black/70 dark:shadow-cyan">
        <div className="flex flex-col gap-y-8 sm:flex-row sm:gap-x-8 md:flex-col">
          <div className="flex pb-5 md:border-none md:pb-0">
            <div className="flex flex-col">
              <h2 className="mb-4 flex pb-1 font-bebas text-3xl font-bold tracking-wider md:text-4xl">
                Contato
                <FaPhoneAlt className="ms-5 text-orange-500 dark:text-purple-700" />
              </h2>

              <ul className="flex flex-col gap-3 text-xl md:text-2xl">
                <Link
                  icon={<FaLinkedin />}
                  url="https://www.linkedin.com/in/pablo-langer-6300802a1/"
                  title="Linkedin"
                />
                <Link
                  icon={<FaEnvelope />}
                  url="mailto:pablolangerpessoal@gmail.com"
                  title="Email"
                />
                <Link
                  icon={<FaFileAlt />}
                  url="https://drive.google.com/file/d/1frqqomn-WWPUEGQJWzb-33YtWxHgBLU9/view?usp=drive_link"
                  title="Curriculo"
                />
              </ul>
            </div>
          </div>
          <div className="flex pb-5 md:border-none md:pb-0">
            <div className="flex flex-col">
              <h2 className="mb-4 flex pb-1 font-bebas text-3xl font-bold tracking-wider md:text-4xl">
                Social
                <FaPeopleGroup className="ms-5 text-orange-500 dark:text-purple-700" />
              </h2>

              <ul className="flex flex-col gap-3 text-xl md:text-2xl">
                <Link
                  icon={<FaGithub />}
                  url="https://github.com/Lirovsky"
                  title="Github"
                />
                <Link
                  icon={<FaWhatsapp />}
                  url="https://wa.me/5551981015687"
                  title="Whatsapp"
                />
                <Link
                  icon={<FaTelegram />}
                  url="https://t.me/Lirovsky"
                  title="Telegram"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-lightcontato2 dark:bg-darkcontato2 hidden h-96 w-5/12 rounded-3xl bg-cover bg-center shadow-orange md:block dark:shadow-cyan"></div>
      </div>
    </div>
  );
}
