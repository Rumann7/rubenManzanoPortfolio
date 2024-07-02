import {
  faHome,
  faInfoCircle,
  faProjectDiagram,
  faTools,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: faHome,
  },
  {
    name: "About",
    hash: "#about",
    icon: faInfoCircle,
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: faProjectDiagram,
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: faTools,
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: faBriefcase,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: faEnvelope,
  },
] as const;
