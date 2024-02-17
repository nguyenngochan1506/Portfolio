import { FaGitSquare } from "react-icons/fa";
import { projects } from "../assets/data"
import { TbWorldWww } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="py-20 px-8" id="project">
        <div>
            <h2 className="font-medium text-3xl tracking-wider border-b-2 border-gray-300">Project</h2>
            <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                {projects.map((project) =>{
                    const {id, title, text, url, img, gitHub} = project;
                    return <article key={id} className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 duration-300">
                        <img src={img} alt={title} className="rounded-t-lg h-64 w-full object-cover"/>
                        <div className="p-8">
                            <h2 className="text-xl font-medium tracking-wide capitalize">{title}</h2>
                            <p className="tracking-wide text-slate-700 leading-7 mt-4">{text}</p>
                        <div className="mt-4 flex gap-x-4">
                            <a href={gitHub} target="_blank"><FaGitSquare className="h-8 w-8"/></a>
                            {url && <a href={url} target="_blank"><TbWorldWww className="h-7 w-7"/></a>}
                            </div>
                        </div>
                    </article>
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects