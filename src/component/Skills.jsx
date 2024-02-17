import { skills } from "../assets/data"

const Skills = () => {
  return (
    <section className="mx-auto px-8 py-20 mt-2" id="skills">
        <h2 className="text-3xl font-medium capitalize border-b-2 tracking-wider border-gray-300">Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 py-16 gap-16">
            {skills.map(skill => {
                const {id, title, icon, text} = skill;
                return <article key={id}>
                    {icon}
                    <h4 className="font-bold mt-6 tracking-wider">{title}</h4>
                    <p className="text-lg text-slate-700 tracking-wide">{text}</p>
                </article>
            })}
        </div>
    </section>
  )
}

export default Skills