import { Asincronismo } from "../assets/images/AsincronismoJS";
import { PortadaExamAws } from "../assets/images/ExamAws";
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
    title: "Asincronismo Javascript",
    private: false,
    technologies: ["Javascript"],
    description:
      "El asincronismo en JavaScript ocurre cuando tenemos ciertas tareas que el navegador va realizando mientras en paralelo el Call Stack va ejecutando otras tareas y las que se van terminando se agregan a una cola de espera (callback queue), mientras las demás se siguen ejecutando, luego cuando todas las tareas están listas termina de ejecutarse el código (event loop).",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
    Images: [],
    frontImage: Asincronismo,
    github: "https://github.com/dtoro-dev/asincronismo-js-platzi",
    comment: [
      "Curso realizado con Platzi",
    ],
  },
  {
    id: 2,
    title: "Tetris-Phunk",
    private: false,
    technologies: ["React JS", "TypeScript", "Vite JS", "Styled Components"],
    description:
      "Tetris-Phunk es el clásico tetris, el cual de momento solo funciona en navegadores de escritorio.",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    Images: [PortadaTetris, TetrisInitial, TetrisGameOver],
    frontImage: PortadaTetris,
    github: "https://github.com/dtoro-dev/tetris",
    comment: [
      "Se planifica cambiar styled components por material ui y que tenga themes similares al portafolio",
      "Se incorporaran socket para jugar online",
      "Se incorporara un backend para registrar data de los usuarios",
      "En este 4 paso esperamos migrar a react native con nuestros propios diseños e intentar generar algun ingreso pasivo en diferentes plataformas",
    ],
  },
  {
    id: 3,
    title: "Portal",
    private: true,
    technologies: [
      "React JS",
      "Material UI",
      "Node JS",
      "Webpack v5",
      "Express JS",
    ],
    description:
      "Portal, implementa parte de la logica de pandora con modulos o secciones (menu) -> roles -> usuarios, tiene como finalidad realizar el registro de los eventos por medio del calendario, generar el ingreso visita a la oficina, crear nuevos usuario, gestor de beneficios, consulta de beneficios, recciones a beneficios, credencial digital que a través de un QR, podria acreditar que es colaborador en la empresa, además de un dashboard que muestra los indicadores de los beneficios con más likes y vistas e histórico de agendamiento, los beneficios con menos likes, generación de reportes de las actividades realizadas en el portal a través de logs y reporte de ingreso. Además, se le envía correo al usuario cuando se restablece la clave, se realiza un ingreso de usuario nuevo, consulta de beneficio y agendamiento evento.",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    Images: [PortadaPortalSoainters, PortalSoaintersInitial],
    frontImage: PortadaPortalSoainters,
    github: "mailto:dtoro.a.s@gmail.com",
    comment: [],
  },
  {
    id: 4,
    title: "Pandora Gentellela v1.0.0",
    private: true,
    technologies: ["PHP", "MySql", "Gentellela", "Bootstrap", "JQuery"],
    description:
      "Pandora es una App con estructuras establecidas, similar a un framework, se desarrollo sobre una app de frabrimetal, con componentes creados como funciones, me base en la lógica de FrontAccounting, para asignar módulos a los roles y estos se asignaban a los usuarios, según necesite cada area. Su ventaja es que se pueden crear módulos y compartir otra aplicación pandora sin necesidad de instalaciones. Si desea ver, favor de contactar con anticipación para preparar la app.",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    Images: [],
    frontImage: PortadaTetris,
    github: "https://github.com/dtoro-dev/tetris",
    comment: ["El desarrollo no se continuo", "Se debe de considerar un ORM"],
  },
  {
    id: 5,
    title: "Examen AWS Cloud Practitioner",
    private: true,
    technologies: ["React JS", "Vite JS", "Material UI", "SQLite"],
    description:
      "Preguntas de ejemplo sobre el examen CA-01 de AWS cloud practitioner.",
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg",
    Images: [],
    frontImage: PortadaExamAws,
    github: "https://github.com/dtoro-dev/tetris",
    comment: ["El desarrollo no se continuo", "Se debe de considerar un ORM"],
  },
];

export default projects;
