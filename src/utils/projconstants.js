export const tabBtns = [
  {
    id: 1,
    btnName: "All",
    text: "ALL",
  },
  {
    id: 2,
    btnName: "Javascript",
    text: "JAVASCRIPT",
  },
  {
    id: 3,
    btnName: "ReactJS",
    text: "REACT",
  },  
  {
    id: 4,
    btnName: "Django",
    text: "DJANGO",
  },  
  
];

export const projects = [
  {
    id: 1,
    title: "Shopfy Application",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1734096400/shopfy-img_nlcpi0.png",
    techStach: ["HTML", "CSS", "Javascript","ES5+","Parcel"],
    category: "JAVASCRIPT",
    description: [
      "Shopfy is a dynamic and user-friendly eCommerce website designed to provide a seamless shopping experience",
      "The platform allows users to browse products, filter through search options, and easily add items to their cart.",
      "Product Search Filters: Users can efficiently search for products using a variety of filters, including: Radio Buttons, Checkboxes, SearchInput.",
      "Login and Register functionality for creating and managing user accounts.",
    ],
    github: "https://github.com/hariharen1996/Shopfy",
    projectLink: "https://shopfy-ecommerce.netlify.app/",
  },
  {
    id: 2,
    title: "Forkify Application",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1734096923/fokify-img_lkohkq.png",
    techStach: ["HTML", "CSS", "Javascript", "Bootstrap", "REST API CALL","Parcel"],
    category: "JAVASCRIPT",
    description: [
      "The forkify is an Recipe App and is used to help users discover, save, and create their favorite recipes.",
      "This app leverages the Forkify API to provide a diverse collection of recipes, along with features that allow users to bookmark, search, and even add their own custom recipes..",
      "Save your favorite recipes for quick access anytime. Manage your saved recipes easily within the app..",
      " Built with Bootstrap, the app is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.",
    ],
    github: "https://github.com/hariharen1996/forkify",
    projectLink: "https://forkifyrecapp.netlify.app/",
  },
  {
    id: 3,
    title: "NxtTrendz - Ecommerce website",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1676122248/ecommerceap_cbhabw.png",
    techStach: ["ReactJS", "Javascript", "CSS", "JWT", "Authentication"],
    category: "REACT",
    smallDesc:
      "The NxtTrendz application is an ecommerce application where users...",
    description: [
      "Implemented a ecommerce website, where users can search for an products using the searchbar",
      "Implemented different routes for features using react router dom",
      "Implemented authentication using jwt token and persisted in local storage",
      "[username:rahul, password: rahul@2021]",
    ],
    github: "https://github.com/hariharen1996/NxtTrendzApp.git",
    projectLink: "https://hariharenxtend.ccbp.tech",
  },
  {
    id: 4,
    title: "NxtWatch - Youtube Clone",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1702647208/nxtwatch_hqol5w.png",
    techStach: [
      "ReactJS",
      "ReduxToolkit",
      "Javascript",
      "CSS",
      "JSX",
      "Firebase",
      "Live Chat",
    ],
    category: "REACT",
    description: [
      "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specifi video details, and users can toggle the theme (Light/Dark).",
      "Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React components, props, state, lists, event handlers, form inputs",
      "Implemented different routes for Login, Home, Trending, Gaming, Saved videos, Video item details pages by using React Router components Route, Switch, Link.",
      "Implemented search bar, where users can search for the videos and implemented debouncing",
      "Implemented Live Chat",
    ],
    github: "https://github.com/hariharen1996/nxtwatch-ytclone",
    projectLink: "https://hariharenxtwatch.netlify.app/",
  },
  {
    id: 5,
    title: "Wikipedia-Search Application",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1676119181/wikipedia_xr7xjc.png",
    github: "https://github.com/hariharen1996/wikipedia-application.git",
    projectLink: "https://hariharenwsapp.ccbp.tech/",
    category: "JAVASCRIPT",
    techStach: ["HTML", "CSS", "Bootstrap", "REST API Calls"],
    description: [
      "Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result.",
      "Displayed list of search results with HTML list elements with hyperlink as url, styled list using CSS, Bootstrap and implemented responsiveness using Flex properties and CSS Box model.",
      "Fetched search results from server asynchronously using fetch GET HTTP API call.",
      "When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML.",
    ],
  },
  {
    id: 6,
    title: "JobSphere",
    image:
      "https://res.cloudinary.com/dhr74n4vu/image/upload/v1737351646/jobsphere_qjsbnf.png",
    github: "https://github.com/hariharen1996/jobsphere",
    projectLink: "https://hariharenwsapp.ccbp.tech/",
    category: "DJANGO",
    techStach: ["HTML", "CSS", "Bootstrap", "Django RestFramework","Django","Python","JWT Authentication","Pandas","Javascript","Jinja","MVT"],
    description: [
      "JobSphere is a comprehensive and user-friendly job portal platform designed to connect employers and job seekers. With a focus on ease of use, advanced search capabilities, and seamless interaction, JobSphere offers an innovative way for job applicants to discover career opportunities and for employers to manage job postings, recruit talent, and foster engagement with potential candidates",
      "Secure login and registration system using JSON Web Tokens (JWT) for authentication, ensuring that both employers and job seekers can easily and securely access their accounts. This authentication mechanism is powered by Django REST API, offering a scalable backend solution.",
      "Users can create and manage personalized profiles. Job seekers can build their profiles with details like qualifications, experience, and skills, while employers can manage their company profiles, job listings, and recruitment needs.",
      "Job seekers can easily search for job opportunities based on a variety of criteria such as location, salary range, required experience, date of posting, and work mode (e.g., remote, on-site, hybrid). The intelligent search functionality allows users to quickly find the jobs most relevant to their needs.",
      "Job seekers can apply for jobs with a simple click, saving time and effort. Additionally, they can bookmark or save job listings they are interested in for later reference. A streamlined job application process ensures that users are kept informed of the status of their applications.",
      "Applicants can leave reviews and comments on job postings, including nested comments, allowing for detailed discussions about the roles, companies, and experiences. A star-rating system is integrated into job listings, letting users rate their experience with the job or company.",
      "Employers can create, update, and delete job postings using a simple and intuitive interface. All job-related data is managed via Django REST API, offering a robust and flexible backend.",
      "Employers can export job data to Excel using Pandas, making it easy to manage job applications, track candidates, and organize hiring processes.",
      "Job seekers will receive email notifications upon applying for jobs, confirming their application submission. Additionally, an email notification system is in place for password resets, ensuring that users can easily recover their accounts.",
      "Job seekers and Employers can keep track of all the jobs they’ve applied to, view the status of each application, and stay informed of any updates or responses from employers.",
    ],
  },
];
