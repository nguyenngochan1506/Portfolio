import { nanoid } from "nanoid";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpring } from "react-icons/si";
import animeImg from './../assets/servlet-project.jpg'
import animeImgV2 from './../assets/anime-ver2.png'


export const links = [
    {id: nanoid(), href: '#home', text: 'home'},
    {id: nanoid(), href: '#about', text: 'about'},
    {id: nanoid(), href: '#skills', text: 'skills'},
    {id: nanoid(), href: '#project', text: 'projects'}
]

export const skills = [
    {
        id: nanoid(),
        title: 'HTML&CSS',
        icon: <FaHtml5 className="h-16 w-16  text-sky-500" />,
        text: 'With HTML and CSS, I have basic proficiency and can utilize accompanying CSS frameworks like Bootstrap and Tailwind.'
    },
    {
        id: nanoid(),
        title: 'JavaScript',
        icon: <IoLogoJavascript className="h-16 w-16  text-sky-500"/>,
        text: 'I have intermediate-level proficiency in JavaScript, primarily used in frontend development, often in conjunction with React'
    },
    {
        id: nanoid(),
        title: 'Java',
        icon: <FaJava className="h-16 w-16  text-sky-500"/>,
        text: "Java was the first language I learned, so it's probably the one I'm most proficient in"
    },
    {
        id: nanoid(),
        title: 'ReactJS',
        icon: <FaReact className="h-16 w-16  text-sky-500"/>,
        text: "React is the main library I use to build interfaces, and I also have the ability to use additional libraries alongside it, such as Redux, React Query, and Axios."
    },
    {
        id: nanoid(),
        title: 'SpringFramework',
        icon: <SiSpring className="h-16 w-16 text-sky-500"/>,
        text: 'The Spring Framework is the main framework I use to build the server-side of web applications, particularly for building RESTful APIs'
    }
]

export const projects = [
    {
        id: nanoid(),
        title: "Anime Website",
        text: "This is the first project I've worked on. In this project, I used Java-Servlet + JDBC + MySQL + HTML/CSS.",
        gitHub: 'https://github.com/nguyenngochan1506/Project-Web-Anime',
        img: animeImg
    },
    {
        id: nanoid(),
        title: "Anime Website V2",
        text: "This is the second project I've worked on, collaborating with a team of four classmates for a class assignment. In this project, I used HTML/CSS (Bootstrap 5), Java (Spring Boot), and MySQL",
        gitHub: 'https://github.com/nguyenngochan1506/AnimeMovieWeb-Group04',
        url: 'https://nguyenngochan1506.github.io/AnimeMovieWeb-Group04/home.html',
        img: animeImgV2
    }
]