import React from "react";
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
    icons: <TiHtml5 size={30} />,
    color: "bg-red-700",
  },
  {
    id: 2,
    text: "CSS",
    icons: <FaCss3Alt size={30} />,
    color: "bg-blue-700",
  },
  {
    id: 3,
    text: "Javascript",
    icons: <RiJavascriptFill size={30} />,
    color: "bg-yellow-700",
  },
  {
    id: 4,
    text: "ReactJS",
    icons: <FaReact size={30} />,
    color: "bg-cyan-700",
  },
  {
    id: 5,
    text: "Redux",
    icons: <SiRedux size={30} />,
    color: "bg-purple-700",
  },
];

export const backEnd = [
  {
    id: 1,
    text: "Python",
    icons: <FaPython size={30} />,
    color: "bg-indigo-700",
  },
  {
    id: 2,
    text: "SQLite",
    icons: <SiSqlite size={30} />,
    color: "bg-gray-700",
  },
  {
    id:3,
    text: "Django",
    icons: <SiDjango size={30} />,
    color: "bg-green-700"
  }
];

export const tools = [
  {
    id: 1,
    text: "Git",
    icons: <FaGitAlt size={30} />,
    color: "bg-red-700",
  },
  {
    id: 2,
    text: "Jira",
    icons: <SiJira size={30} />,
    color: "bg-blue-700",
  },
];
