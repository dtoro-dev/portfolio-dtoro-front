import {
  PortadaPortalSoainters,
  PortalSoaintersInitial,
} from "../assets/images/PortalSoainters";
import {
  PortadaTetris,
  TetrisGameOver,
  TetrisInitial,
} from "../assets/images/tetris";

const projects = [
  {
    id: 1,
    title: "Pandora Gentellela v1.0.0",
    technologies: ["PHP", "MySql"],
    description:
      "Pandora es una aplicacion que implemente en la empresa fabrimetal, una app de frabrimetal convertida en un pequeño 'framework', me base en la logica de FrontAccounting, para asignar modulos a los roles y estos se asignaban a los usuarios, segun necesite el usuario. su ventaja es que se pueden crear modulos y trasladar a otra app pandora sin necesidad de instalaciones",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    Images: [PortadaTetris, TetrisInitial, TetrisGameOver],
    frontImage: PortadaTetris,
    github: "https://github.com/dtoro-dev/tetris",
    comment: [
      "El desarrollo no se continuo",
      "Se debe de considerar un ORM",
    ],
  },
  {
    id: 2,
    title: "Tetris-Phunk (v1.0.0 no responsive)",
    technologies: ["React JS", "TypeScript", "Vite JS", "Styled Components"],
    description:
      "Tetris-Phunk es el clásico tetris, pero de momento solo funciona en navegadores de escritorio.",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    Images: [PortadaTetris, TetrisInitial, TetrisGameOver],
    frontImage: PortadaTetris,
    github: "https://github.com/dtoro-dev/tetris",
    comment: [
      "Se planifica cambiar styled components por material ui",
      "Se incorporaran socket para jugar online",
      "Se incorporara un backend para registrar data de los usuarios",
      "En este 4 paso esperamos migrar a react native con nuestros propios diseños e intentar generar algun ingreso pasivo en diferentes plataformas",
    ],
  },
  {
    id: 3,
    title: "Portal vBeta(Privado Frontend / Backend)",
    technologies: [
      "React JS",
      "Material UI v5",
      "Node JS",
      "Webpack v5",
      "Express JS",
    ],
    description:
      "Tetris-Phunk es el clásico tetris, pero de momento solo funciona en navegadores de escritorio.",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    Images: [PortadaPortalSoainters, PortalSoaintersInitial],
    frontImage: PortadaPortalSoainters,
    github: false,
    comment: [
      "Se planifica cambiar styled components por material ui",
      "Se incorporaran socket para jugar online",
      "Se incorporara un backend para registrar data de los usuarios",
      "En este 4 paso esperamos migrar a react native con nuestros propios diseños e intentar generar algun ingreso pasivo en diferentes plataformas",
    ],
  },
];

export default projects;
