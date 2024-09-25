import { MdAddAPhoto } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiMightySpanner } from "react-icons/gi";
// import { MdLocalGroceryStore } from "react-icons/md";
import devfest from "../assets/eventsandgallery/devfestevent/devfest.jpg";
import devfestme from "../assets/eventsandgallery/devfestevent/devfestme.jpg";
import devfestgroup from "../assets/eventsandgallery/devfestevent/devfestgroup.jpg";
import coletix from "../assets/eventsandgallery/jcolefest/tix.jpg";
import colemepix from "../assets/eventsandgallery/jcolefest/mypix.jpg";
import colegroup from "../assets/eventsandgallery/jcolefest/grouppix.jpg";

// projects
import wakainfo from "../assets/projects/wakainfo.jpg";
import pioclean from "../assets/projects/pioclean.jpg";
import complaintportal from "../assets/projects/complaintportal.jpg";
import helloDream from "../assets/projects/hellodream.jpg";

// techlogo
import dotnet from "../assets/technologyLogo/dotnet.png";
import aspdotnet from "../assets/technologyLogo/asp.net.png";
import csharp from "../assets/technologyLogo/c#.png";
import react from "../assets/technologyLogo/react.png";
import javacsript from "../assets/technologyLogo/javascript.png";
import nodejs from "../assets/technologyLogo/node.png";
import expressjs from "../assets/technologyLogo/express.png";
import mondodb from "../assets/technologyLogo/mongodb.png";
import sql from "../assets/technologyLogo/sql.png";
import bootsrap from "../assets/technologyLogo/bootstrap.png";
import tailwind from "../assets/technologyLogo/tailwind.png";
import jquery from "../assets/technologyLogo/jquery.png";
import efcore from "../assets/technologyLogo/efcore.png";

export const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "services",
    url: "/services",
    icon: <GiMightySpanner />,
  },
  {
    id: 3,
    text: "events and gallery",
    url: "/eventsandgallery",
    icon: <MdAddAPhoto />,
  },
  // {
  //   id: 4,
  //   text: "music store",
  //   url: "/store",
  //   icon: <MdLocalGroceryStore />,
  // },
];

export const projects = [
  {
    title: "hello dreams",
    image: helloDream,
    stack: "React, Redux, Javascript, Jquery, Html5, Css3 and Bootstrap",
    about: `hello dream is still in devlepoment website for a start up company that renders tech services such ui/ux designs,
     graphic designs, mentorship and training for tech enthusiast interested in various tech skill. `,
    url: "https://hellodreams.netlify.app/",
  },
  {
    title: "pioclean laundry website",
    image: pioclean,
    stack: "React, Javascript, Html5 and Css3",
    about: `pioclean laundry website is a responsive and user friendly website, designed for seamless business transaction. users can easily navigate to the appropriate page
     with less hussle. customers can request order,checkout and pickup request.`,
    url: "https://main--pioclean.netlify.app/",
  },

  {
    title: "complaint portal",
    image: complaintportal,
    stack: "React, Javascript, Html5 and Css3",
    about: `compliant portal is a 360 intra-business solution designed to facilatate complaint resolution. 
    it enables staff log complaint for themselves, and unbehalf of customers
    to appropriate department and persons with the responsibilities of resolving such complaints,
    It has a chat box so users can communicate from both ends of complaint and resolution, still within the complaint portal.`,
    url: "https://complaint-dash-portal.netlify.app/",
  },
  {
    title: "wakainfo app.",
    image: wakainfo,
    stack: "Javascript, Html5 and Css3",
    about: `wakainfo is a map app that renders information on countries.
     users can access information as currency, population, continent, schools, hospital, hotels and tourist attractions 
     as well as other information by selecting from a range of countries or clicking any country on the map. `,
    url: "https://waka-info.netlify.app/",
  },
];

export const eventandgallery = [
  {
    text: "excerpt from J.Cole's concert, 2018",
    images: [coletix, colemepix, colegroup],
  },
  {
    text: "excerpt from devfest, 2023",
    images: [devfest, devfestme, devfestgroup],
  },
];

export const techLogo = [
  dotnet,
  aspdotnet,
  csharp,
  efcore,
  react,
  javacsript,
  jquery,
  nodejs,
  expressjs,
  mondodb,
  sql,
  bootsrap,
  tailwind,
];
