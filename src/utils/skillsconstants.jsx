import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiRedux,
  SiSqlite,
  SiJira,
  SiDjango
} from "react-icons/si";
import { FaPython } from "react-icons/fa6";

export const frontEnd = [
  {
    id: 1,
    text: "HTML",
    icons: TiHtml5,
    color: "bg-red-700",
  },
  {
    id: 2,
    text: "CSS",
    icons: FaCss3Alt,
    color: "bg-blue-700",
  },
  {
    id: 3,
    text: "Javascript",
    icons: RiJavascriptFill,
    color: "bg-yellow-700",
  },
  {
    id: 4,
    text: "ReactJS",
    icons: FaReact,
    color: "bg-cyan-700",
  },
  {
    id: 5,
    text: "Redux",
    icons: SiRedux,
    color: "bg-purple-700",
  },
];

export const backEnd = [
  {
    id: 1,
    text: "Python",
    icons: FaPython,
    color: "bg-indigo-700",
  },
  {
    id: 2,
    text: "SQLite",
    icons: SiSqlite,
    color: "bg-gray-700",
  },
  {
    id: 3,
    text: "Django",
    icons: SiDjango,
    color: "bg-green-700",
  }
];

export const tools = [
  {
    id: 1,
    text: "Git",
    icons: FaGitAlt,
    color: "bg-red-700",
  },
  {
    id: 2,
    text: "Jira",
    icons: SiJira,
    color: "bg-blue-700",
  },
];