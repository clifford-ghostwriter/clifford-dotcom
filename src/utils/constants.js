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

export const projects = [];

export const eventandgallery = [
  {
    text: "excerpt from devfest 2023",
    images: [devfest, devfestme, devfestgroup],
  },
  {
    text: "excerpt from j.cole's concert 2018",
    images: [coletix, colemepix, colegroup],
  },
];
