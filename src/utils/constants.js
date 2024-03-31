import { MdAddAPhoto } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiMightySpanner } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import devfest from "../assets/eventsandgallery/devfestevent/devfest.jpg";
import devfestme from "../assets/eventsandgallery/devfestevent/devfestme.jpg";
import devfestgroup from "../assets/eventsandgallery/devfestevent/devfestgroup.jpg";
import coletix from "../assets/eventsandgallery/jcolefest/tix.jpg";
import colemepix from "../assets/eventsandgallery/jcolefest/mypix.jpg";
import colegroup from "../assets/eventsandgallery/jcolefest/grouppix.jpg";

// projects
import wakainfo from "../assets/projects/wakainfo.jpg";

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
  {
    id: 4,
    text: "store",
    url: "/store",
    icon: <MdLocalGroceryStore />,
  },
];

export const projects = [
  {
    title: "wakainfo",
    image: wakainfo,
    stack: "html5, css3 and javascript",
    about: `wakainfo is a map app that renders information on countries.
     users can access information as currency, population, continent, schools, hospital, hotels and tourist attractions 
     as well as other information by selecting from a range of countries or clicking any country on the map. `,
  },
  {
    title: "wakainfo",
    image: wakainfo,
    stack: "html5, css3 and javascript",
    about: `wakainfo is a map app that renders information on countries.
     users can access information as currency, population, continent, schools, hospital, hotels and tourist attractions 
     as well as other information by selecting from a range of countries or clicking any country on the map. `,
  },
  {
    title: "wakainfo",
    image: wakainfo,
    stack: "html5, css3 and javascript",
    about: `wakainfo is a map app that renders information on countries.
     users can access information as currency, population, continent, schools, hospital, hotels and tourist attractions 
     as well as other information by selecting from a range of countries or clicking any country on the map. `,
  },
];

export const eventandgallery = [
  {
    text: "excerpt from j.cole's concert, 2018",
    images: [coletix, colemepix, colegroup],
  },
  {
    text: "excerpt from devfest, 2023",
    images: [devfest, devfestme, devfestgroup],
  },
];
