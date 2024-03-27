import { MdAddAPhoto } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GiMightySpanner } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";

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
    id: 3,
    text: "store",
    url: "/store",
    icon: <MdLocalGroceryStore />,
  },
];
