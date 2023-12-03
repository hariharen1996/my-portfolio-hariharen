import { RiTodoLine } from "react-icons/ri";
import { FaSearchLocation, FaYoutube } from "react-icons/fa";
import { SiSwiggy } from "react-icons/si";
import { TbBrandNetflix } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

export const tabBtns = [
  {
    id: 1,
    btnName: "All",
    text: "ALL",
  },
  {
    id: 2,
    btnName: "Static",
    text: "STATIC",
  },

  {
    id: 3,
    btnName: "Javascript",
    text: "JAVASCRIPT",
  },
  {
    id: 4,
    btnName: "ReactJS",
    text: "REACT",
  },
];

export const projects = [
  {
    id: 1,
    title: "Todos Application",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1701501959/qexizgnklztehrc3oqdd.png",
    techStach: ["HTML", "CSS", "Javascript", "Bootstrap"],
    category: "JAVASCRIPT",
    smallDesc:
      "The todos application aims to provide a clean and intuitive interface...",
    description: [
      "Developed persistent todo application with CRUD operations to track list of tasks",
      "Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap",
      "Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.",
      "Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods",
    ],
    github: "https://github.com/hariharen1996/todoapplication",
    projectLink: "",
    icon: <RiTodoLine />,
  },
  {
    id: 2,
    title: "Countries Search Application",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1701509033/xulg8rdmo8ed8vlfd88w.png",
    techStach: ["HTML", "CSS", "Javascript", "Bootstrap"],
    category: "JAVASCRIPT",
    smallDesc: "The countries search application designed to provide users...",
    description: [
      "Developed responsive countries search application which shows all countries and respective population in the world",
      "We can also search by specific country Fetched countries list from server asynchronously using fetch GET HTTP API call and implemented responsiveness using Bootstrap grid system and CSS box model.",
      "Implemented local search functionality by using input element, JavaScript event listeners & filtered countries using Array filter method.",
    ],
    github: "https://github.com/hariharen1996/countries-search",
    projectLink: "",
    icon: <FaSearchLocation />,
  },
  {
    id: 3,
    title: "FoodSpicy - Swiggy Clone",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1676119169/countrysearch_nfosvs.png",
    techStach: [
      "ReactJS",
      "ReduxToolkit",
      "Javascript",
      "TaiwindCSS",
      "SwiggyLiveAPI",
    ],
    category: "REACT",
    smallDesc:
      "The FoodSpicy is a comprehensive food delivery platform designed to mirror the popular features and functionality of Swiggy...",
    description: [
      "Implemented a FoodSpicy website, which is a comprehensive food delivery platform designed to mirror the popular features and functionality of Swiggy",
      "Implemented different routes for features using react router dom",
      "Implemented an accordian tabs to display the information of food items.",
    ],
    github: "",
    projectLink: "",
    icon: <SiSwiggy />,
  },
  {
    id: 4,
    title: "MovieShare - Netflix Clone",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1676119169/countrysearch_nfosvs.png",
    techStach: [
      "ReactJS",
      "ReduxToolkit",
      "Javascript",
      "TaiwindCSS",
      "TMDB API",
      "Firebase",
    ],
    category: "REACT",
    smallText:
      "MovieShare is a full-fledged streaming platform designed to emulate the key features and user experience of Netflix...",
    description: [
      "MovieShare is a full-fledged streaming platform designed to emulate the key features and user experience of Netflix",
      "Implemented username and password authentication using firebase",
      "Added Search Bar, where users can search for an particular movies",
      "Implemented the app as responsive website using tailwindcss",
    ],
    github: "",
    projectLink: "",
    icon: <TbBrandNetflix />,
  },
  {
    id: 5,
    title: "NxtWatch - Youtube Clone",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1676119169/countrysearch_nfosvs.png",
    techStach: [
      "ReactJS",
      "ReduxToolkit",
      "Javascript",
      "CSS",
      "JSX",
      "Firebase",
      "Dynamic Search",
      "Live Chat",
    ],
    category: "REACT",
    smallDesc:
      "NxtWatch is an comprehensive video-sharing platform that replicates the core features and functionalities of YouTube...",
    description: [
      "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specifi video details, and users can toggle the theme (Light/Dark).",
      "Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React components, props, state, lists, event handlers, form inputs",
      "Implemented different routes for Login, Home, Trending, Gaming, Saved videos, Video item details pages by using React Router components Route, Switch, Link.",
      "Implemented dynamic search bar like youtube, where users can search for the videos",
      "Implemented Live Chat",
    ],
    github: "",
    projectLink: "",
    icon: <FaYoutube />,
  },
  {
    id: 6,
    title: "Food Munch Website",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1701516461/gxfir5lhrik4hwkk9kjh.png",
    techStach: ["HTML", "CSS", "Bootstrap"],
    category: "STATIC",
    smallDesc: "FoodMunch is an food store website...",
    description: [
      "Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item.",
      "It offers Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.",
      "Implemented product youtube videos by using bootstrap embed and model components.",
    ],
    github: "",
    projectLink: "",
    icon: <IoFastFoodSharp />,
  },
  {
    id: 7,
    title: "E-commerce Website",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1701516545/whbnbbd2p5pbwggoolrv.png",
    techStach: ["HTML", "CSS", "Bootstrap"],
    category: "STATIC",
    smallDesc: "E-commerce website is used to display different products...",
    description: [
      "Developed E Commerce website where users can go through different products, detailed information about a product, offers and contact us info.",
      " Designed page using following HTML structure elements and footer elements by using different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.",
      " Implemented product youtube videos by using bootstrap embed and model components and displayed multiple images of offers in a carousel using bootstrap carousel.",
    ],
    github: "",
    projectLink: "",
    icon: <MdOutlineShoppingCart />,
  },
];
