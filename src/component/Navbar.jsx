import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav className="bg-sky-100">
      <div className="px-8 py-8 mx-auto flex flex-col sm:flex-row sm:items-center sm:gap-x-16 sm:px-8 sm:py-4">
        <h2 className="text-3xl font-bold">
          Han<span className="text-sky-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
            {links.map(link =>{
                const {id, href, text} = link;
                return <a href={href} key={id} className="capitalize text-lg tracking-wide hover:text-sky-600 duration-300">{text}</a>
            })}
        </div>
        <div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
