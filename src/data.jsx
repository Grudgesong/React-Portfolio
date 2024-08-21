import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Asp.Net",
    icon: <DiDotnet className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in ASP.NET, developing robust and scalable back-end applications with a strong emphasis on MVC (Model-View-Controller) architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://i.postimg.cc/KYdg6tZN/Capture.png",
    url: "https://sangraj-backroads-app.netlify.app",
    github: "https://github.com/Grudgesong/backroads-app",
    title: "backroads app",
    text: "Created a landing page for a travel company using React.js, with the goal of catching people's attention and showing off amazing places to visit. Included attractive pictures and interesting information about different vacation options and beautiful locations. Made it easy for people to find their way around and use the website smoothly. ",
  },
  {
    id: nanoid(),
    img: "https://i.postimg.cc/NfBp4c4m/Capture.png",
    url: "",
    github: "https://github.com/Grudgesong/ReStore--Ecommerce-Project",
    title: "e-commerce Project",
    text: "I developed an e-commerce application using a modern tech stack to deliver a seamless user experience. The front end is built with React.js and TypeScript, using Redux for state management and Material-UI for styling. The back end is powered by ASP.NET Core with Entity Framework and PostgreSQL for data management. The application also includes secure authentication with ASP.NET Core Identity and API integration through ASP.NET Web API.",
  },
];
