import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import heroImg from '../assets/hero-icon.svg'

const Content = () => {
  return (
    <div className="bg-sky-100 py-24">
      <div className="mx-auto px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl capitalize font-bold tracking-wider">
            I'm Han
          </h1>
          <p className="text-3xl capitalize mt-4 text-slate-800 tracking-wide">
            Web Developer
          </p>
          <p className="text-lg capitalize mt-2 text-slate-700 tracking-wide">
            i love the sunshine
          </p>
          <div className="mt-2 flex gap-x-4">
          <a href="https://github.com/nguyenngochan1506" target="_blank"><FaGithubSquare className="w-8 h-8 text-slate-700 hover:text-black duration-300" /></a>
          <a href="https://web.facebook.com/profile.php?id=100041988275514" target="_blank"><FaFacebookSquare className="w-8 h-8 text-slate-700 hover:text-black duration-300" /></a>
          <a href="https://www.linkedin.com/in/han-nguyen-878b892b4/" target="_blank"><FaLinkedin className="w-8 h-8 text-slate-700 hover:text-black duration-300" /></a>
        </div>
        </article>
        <article className="hidden md:block">
            <img className="h-80 lg:h-96" src={heroImg} alt="icon" />
        </article>
      </div>
    </div>
  );
};

export default Content;
