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
    name: "Inicio",
    hash: "#inicio",
    icon: faHome,
  },
  {
    name: "Acerca",
    hash: "#acerca-de",
    icon: faInfoCircle,
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
    icon: faProjectDiagram,
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
    icon: faTools,
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
    icon: faBriefcase,
  },
  {
    name: "Contacto",
    hash: "#contacto",
    icon: faEnvelope,
  },
] as const;
