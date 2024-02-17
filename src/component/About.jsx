import aboutImg from "../assets/about-icon.svg";

const About = () => {
  return (
    <section className=" px-8 py-4 grid md:grid-cols-2 gap-16 items-center" id="about">
      <img src={aboutImg} alt="icon" className="w-full h-64" />
      <article className="py-8 ">
        <h2 className="text-3xl font-medium capitalize border-b-2 tracking-wider border-gray-300">
          About
        </h2>
        <p className="text-lg text-slate-700 tracking-wide mt-8">
          <ul className="gap-y-10">
            <li>-<span className="underline underline-offset-2"> FullName:</span> <strong>Nguyễn Ngọc Hân</strong></li>
            <li>-<span className="underline underline-offset-2"> School:</span> <strong>Nong Lam University</strong></li>
            <li>-<span className="underline underline-offset-2"> Hobby:</span> <strong>Music, Read, Game</strong></li>
            <li className="underline underline-offset-2 decoration-sky-500">- I want to become a full-stack engineer</li>
          </ul>
        </p>
      </article>
    </section>
  );
};

export default About;
